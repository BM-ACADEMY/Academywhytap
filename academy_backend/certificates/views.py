from datetime import datetime, timedelta
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, action, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from bson import ObjectId
from dateutil import parser as date_parser
from django.http import FileResponse, Http404
import os

from .models import Certificate
from users.models import User as MongoUser
from .authentication import MongoJWTAuthentication
from .permissions import IsMongoAdmin

from PIL import Image, ImageDraw, ImageFont
import os

# ---------------------------------------------------------
# CERTIFICATE IMAGE GENERATOR
# ---------------------------------------------------------
def generate_certificate_file(certificate_id, name, course_name, date_str):
    """
    Generates a high-quality certificate image by drawing text on a template.
    """
    template_path = os.path.join("static", "templates", "template.png")
    output_dir = os.path.join("static", "certificates")
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    output_path = os.path.join(output_dir, f"{certificate_id}.pdf")
    
    try:
        # Load the template
        img = Image.open(template_path).convert("RGB") # Convert to RGB for PDF compatibility
        draw = ImageDraw.Draw(img)
        
        # Load Fonts (Using Arial as a professional standard)
        # On Windows, Arial is typically in C:\Windows\Fonts\
        font_path_bold = "C:\\Windows\\Fonts\\arialbd.ttf" # Bold
        font_path_regular = "C:\\Windows\\Fonts\\arial.ttf" # Regular
        
        # Fallback for search or other OS
        if not os.path.exists(font_path_bold):
            font_path_bold = "arial.ttf" # Try local or system path

        # Define Font Sizes
        title_font = ImageFont.truetype(font_path_bold, 80)
        course_font = ImageFont.truetype(font_path_bold, 50)
        details_font = ImageFont.truetype(font_path_regular, 35)
        id_font = ImageFont.truetype(font_path_regular, 25)

        # Image size for centering
        W, H = img.size

        # 1. Draw Name (Centered)
        name_text = name.upper()
        # draw.text((W/2, H/2 - 50), name_text, fill="#9D1B50", font=title_font, anchor="mm")
        # For simplicity without anchor, we calculate offset
        left, top, right, bottom = draw.textbbox((0, 0), name_text, font=title_font)
        draw.text(((W - (right - left)) / 2, H * 0.45), name_text, fill="#9D1B50", font=title_font)

        # 2. Draw Course Name
        course_text = f"for successfully completing the course in {course_name}"
        left, top, right, bottom = draw.textbbox((0, 0), course_text, font=course_font)
        draw.text(((W - (right - left)) / 2, H * 0.58), course_text, fill="#333333", font=course_font)

        # 3. Draw Date
        date_label = f"Issued on: {date_str}"
        draw.text((W * 0.15, H * 0.82), date_label, fill="#666666", font=details_font)

        # 4. Draw Certificate ID
        id_label = f"Verification ID: {certificate_id}"
        draw.text((W * 0.15, H * 0.86), id_label, fill="#888888", font=id_font)

        # Save the result as PDF
        img.save(output_path, "PDF", resolution=100.0)
        return output_path
        
    except Exception as e:
        print(f"Error generating certificate: {e}")
        return None


# ---------------------------------------------------------
# AUTO CERTIFICATE ID (UNCHANGED)
# ---------------------------------------------------------
def generate_certificate_id(target_date=None):
    year = target_date.year if target_date else datetime.utcnow().year

    last_cert = (
        Certificate.objects(certificate_id__startswith=f"BMACERT-{year}-")
        .order_by("-certificate_id")
        .first()
    )

    if last_cert:
        last_number = int(last_cert.certificate_id.split("-")[-1])
        next_number = last_number + 1
    else:
        next_number = 1

    return f"BMACERT-{year}-{next_number:04d}"


# ---------------------------------------------------------
# CERTIFICATE VIEWSET
# ---------------------------------------------------------
class CertificateViewSet(viewsets.ViewSet):
    authentication_classes = [MongoJWTAuthentication]
    permission_classes = [IsMongoAdmin]

    # -----------------------------
    # INTERNAL HELPERS (MANUAL)
    # -----------------------------
    def _get_course_code(self, course_name):
        if not course_name:
            return "GEN"

        # Split by spaces and filter out empty strings
        words = [w.strip() for w in course_name.split() if w.strip()]
        
        if not words:
            return "GEN"
            
        # Extract the first letter of each word
        # e.g., "Frontend Course" -> "FC"
        # e.g., "Python Fullstack Development" -> "PFD"
        initials = "".join([w[0].upper() for w in words])
        
        return initials if initials else "GEN"

    def _generate_manual_certificate_id(self, course_name, issued_date=None):
        year = issued_date.year if issued_date else datetime.utcnow().year
        course_code = self._get_course_code(course_name)

        prefix = f"BM{course_code}{year}"

        # Get count of manual certificates for this prefix
        last_cert = (
            Certificate.objects(certificate_id__startswith=prefix)
            .order_by("-certificate_id")
            .first()
        )

        if last_cert:
            # Extract last 3 digits
            try:
                last_number = int(last_cert.certificate_id[-3:])
                next_number = last_number + 1
            except (ValueError, IndexError):
                next_number = 1
        else:
            next_number = 1

        return f"{prefix}{next_number:03d}"

    # ---------------------------------------------------------
    # AUTO CERTIFICATE
    # ---------------------------------------------------------
    def create(self, request):
        user_id = request.data.get("user_id")
        course_id = request.data.get("course_id")

        if not user_id or not course_id:
            return Response(
                {"error": "user_id and course_id are required"}, status=status.HTTP_400_BAD_REQUEST
            )

        current_time = datetime.utcnow()
        certificate_id = generate_certificate_id(current_time)

        user = MongoUser.objects(id=ObjectId(user_id)).first()
        user_name = user.name if user else "Unknown User"

        course_title = request.data.get("course_name", "Unknown Course")

        cert = Certificate(
            user_id=str(user_id),
            course_id=str(course_id),
            certificate_id=certificate_id,
            issue_date=current_time,
        )
        
        # Generate the physical file
        date_str = current_time.strftime("%d %B %Y")
        file_path = generate_certificate_file(certificate_id, user_name, course_title, date_str)
        if file_path:
            cert.file_path = file_path
            cert.file_url = f"/static/certificates/{certificate_id}.pdf"
        
        cert.save()

        return Response(
            {
                "message": "Certificate created successfully",
                "data": {
                    "certificate_id": certificate_id,
                    "name": user_name,
                    "course": course_title,
                    "certificate_type": "Course",
                    "issued_date": current_time.strftime("%Y-%m-%d"),
                },
            },
            status=status.HTTP_201_CREATED,
        )

    # ---------------------------------------------------------
    # MANUAL CERTIFICATE (UPDATED FORMAT)
    # ---------------------------------------------------------
    @action(
        detail=False,
        methods=["POST"],
        url_path="manual",
        authentication_classes=[],
        permission_classes=[AllowAny],
    )
    def manual_certificate(self, request):
        name = request.data.get("name")
        course = request.data.get("course")
        issued_date_str = request.data.get("issued_date")
        certificate_type = request.data.get("certificate_type", "Course")

        if not name or not course:
            return Response(
                {"error": "name and course are required"}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            issued_dt = date_parser.parse(issued_date_str) if issued_date_str else datetime.utcnow()
        except Exception:
            issued_dt = datetime.utcnow()

        certificate_id = self._generate_manual_certificate_id(course, issued_dt)

        cert = Certificate(
            manual_name=name,
            manual_course=course,
            certificate_type=certificate_type,
            certificate_id=certificate_id,
            issue_date=issued_dt,
        )
        
        # Generate the physical file
        date_str = issued_dt.strftime("%d %B %Y")
        file_path = generate_certificate_file(certificate_id, name, course, date_str)
        if file_path:
            cert.file_path = file_path
            cert.file_url = f"/static/certificates/{certificate_id}.pdf"
            
        cert.save()

        return Response(
            {
                "message": "Manual certificate created",
                "certificate_id": certificate_id,
                "name": name,
                "course": course,
                "certificate_type": certificate_type,
                "issued_date": issued_dt.strftime("%Y-%m-%d"),
            },
            status=status.HTTP_201_CREATED,
        )

    # ---------------------------------------------------------
    # LIST CERTIFICATES
    # ---------------------------------------------------------
    def list(self, request):
        certificates = Certificate.objects.all()

        range_param = request.query_params.get("range")
        from_date = request.query_params.get("from")
        to_date = request.query_params.get("to")

        now_dt = datetime.utcnow()

        if range_param == "today":
            start = now_dt.replace(hour=0, minute=0, second=0, microsecond=0)
            end = start + timedelta(days=1)
            certificates = certificates.filter(issue_date__gte=start, issue_date__lt=end)

        elif range_param == "7":
            certificates = certificates.filter(issue_date__gte=now_dt - timedelta(days=7))

        elif range_param == "30":
            certificates = certificates.filter(issue_date__gte=now_dt - timedelta(days=30))

        elif from_date and to_date:
            start = datetime.fromisoformat(from_date)
            end = datetime.fromisoformat(to_date) + timedelta(days=1)
            certificates = certificates.filter(issue_date__gte=start, issue_date__lt=end)

        certificates = certificates.order_by("-issue_date")

        data = []
        for cert in certificates:
            if cert.user_id:
                user = MongoUser.objects(id=ObjectId(cert.user_id)).first()
                user_name = user.name if user else "Unknown User"
                course_name = cert.manual_course or "Course"
            else:
                user_name = cert.manual_name
                course_name = cert.manual_course

            data.append(
                {
                    "certificate_id": cert.certificate_id,
                    "user_name": user_name,
                    "course_name": course_name,
                    "certificate_type": cert.certificate_type,
                    "issue_date": cert.issue_date,
                }
            )

        return Response({"data": data}, status=status.HTTP_200_OK)

    # ---------------------------------------------------------
    # DELETE CERTIFICATE
    # ---------------------------------------------------------
    def destroy(self, request, pk=None):
        cert = Certificate.objects(certificate_id=pk).first()

        if not cert and ObjectId.is_valid(pk):
            cert = Certificate.objects(id=ObjectId(pk)).first()

        if not cert:
            return Response({"error": "Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

        cert.delete()
        return Response(
            {"message": "Certificate deleted successfully"}, status=status.HTTP_204_NO_CONTENT
        )


# ---------------------------------------------------------
# VERIFY CERTIFICATE (PUBLIC)
# ---------------------------------------------------------
@api_view(["GET"])
@authentication_classes([])
@permission_classes([AllowAny])
def verify_certificate(request, certificate_id):
    cert = Certificate.objects(certificate_id=certificate_id).first()

    if not cert:
        return Response({"valid": False, "message": "Certificate not found"}, status=404)

    if cert.user_id:
        user = MongoUser.objects(id=ObjectId(cert.user_id)).first()
        user_name = user.name if user else "Unknown User"
        course_name = cert.manual_course or "Course"
    else:
        user_name = cert.manual_name
        course_name = cert.manual_course

    return Response(
        {
            "valid": True,
            "name": user_name,
            "course": course_name,
            "issuedDate": cert.issue_date.strftime("%d %B %Y"),
        }
    )


# ---------------------------------------------------------
# CERTIFICATE SERVING HELPER (INTERNAL)
# ---------------------------------------------------------
def _serve_certificate_file(certificate_id, as_attachment=True):
    cert = Certificate.objects(certificate_id=certificate_id).first()

    if not cert:
        raise Http404("Certificate not found")

    if not cert.file_path:
        raise Http404("Certificate PDF not stored")

    if not os.path.exists(cert.file_path):
        raise Http404("Certificate file missing on server")

    # SMART CONVERSION: If the file is a legacy PNG, convert it to PDF on-the-fly
    if cert.file_path.endswith('.png'):
        try:
            from io import BytesIO
            img = Image.open(cert.file_path).convert("RGB")
            pdf_buffer = BytesIO()
            img.save(pdf_buffer, "PDF", resolution=100.0)
            pdf_buffer.seek(0)
            
            return FileResponse(
                pdf_buffer,
                content_type="application/pdf",
                as_attachment=as_attachment,
                filename=f"BM_CERT_{certificate_id}.pdf"
            )
        except Exception as e:
            print(f"Conversion error: {e}")
            raise Http404(f"Error converting legacy certificate to PDF: {str(e)}")

    # For native PDF files
    return FileResponse(
        open(cert.file_path, "rb"),
        content_type="application/pdf",
        as_attachment=as_attachment,
        filename=f"BM_CERT_{certificate_id}.pdf"
    )


# ---------------------------------------------------------
# DOWNLOAD CERTIFICATE (PUBLIC)
# ---------------------------------------------------------
@api_view(["GET"])
@authentication_classes([])
@permission_classes([AllowAny])
def download_certificate(request, certificate_id):
    return _serve_certificate_file(certificate_id, as_attachment=True)


# ---------------------------------------------------------
# VIEW CERTIFICATE (PUBLIC/ADMIN PREVIEW)
# ---------------------------------------------------------
@api_view(["GET"])
@authentication_classes([])
@permission_classes([AllowAny])
def view_certificate(request, certificate_id):
    return _serve_certificate_file(certificate_id, as_attachment=False)
