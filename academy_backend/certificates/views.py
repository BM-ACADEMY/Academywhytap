from datetime import datetime, timedelta
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, action, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from bson import ObjectId
from dateutil import parser as date_parser
from django.http import FileResponse, Http404
import os
import sys

from .models import Certificate
from users.models import User as MongoUser
from .authentication import MongoJWTAuthentication
from .permissions import IsMongoAdmin

from PIL import Image, ImageDraw, ImageFont
import os

# ---------------------------------------------------------
# CERTIFICATE IMAGE GENERATOR (PERFECT ALIGNMENT)
# ---------------------------------------------------------
def generate_certificate_file(certificate_id, name, course_name, date_str):
    """
    Generates a premium certificate file matching the reference design exactly.
    Uses mixed text weights (Regular + Bold) on the same horizontal line.
    """
    template_path = os.path.join("static", "templates", "template.png")
    output_dir = os.path.join("static", "certificates")
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    output_path = os.path.join(output_dir, f"{certificate_id}.pdf")
    
    try:
        # Load the template
        if not os.path.exists(template_path):
            raise Exception(f"Template not found at {template_path}")
            
        img = Image.open(template_path).convert("RGB")
        draw = ImageDraw.Draw(img)
        
        # Load Fonts (Use standard names, Pillow will search system fonts on Windows)
        font_name_bold = "arialbd.ttf"
        font_name_regular = "arial.ttf"

        # Font Sizes (Calibrated for the professional compact design)
        reg_size = 28
        bold_size = 38
        bottom_size = 24

        try:
            font_reg = ImageFont.truetype(font_name_regular, reg_size)
            font_bold = ImageFont.truetype(font_name_bold, bold_size)
            font_bottom = ImageFont.truetype(font_name_regular, bottom_size)
        except:
            # Fallback for systems without Arial
            print("Font loading failed, using default...")
            font_reg = ImageFont.load_default()
            font_bold = ImageFont.load_default()
            font_bottom = ImageFont.load_default()

        W, H = img.size

        # --- Helper for centers-aligned mixed style lines ---
        def draw_centered_mixed_text(y, segments, segment_fonts, segment_colors):
            total_w = 0
            widths = []
            for i, p in enumerate(segments):
                l, t, r, b = draw.textbbox((0, 0), p, font=segment_fonts[i])
                w = r - l
                widths.append(w)
                total_w += w
            
            curr_x = (W - total_w) / 2
            for i, p in enumerate(segments):
                # Calculate baseline offset so fonts of different sizes align properly
                _, t, _, b = draw.textbbox((0, 0), p, font=segment_fonts[i])
                # Ensure coordinates are integers for compatibility
                draw.text((int(curr_x), int(y - (b - t)/4)), p, fill=segment_colors[i], font=segment_fonts[i])
                curr_x += widths[i]

        # 1. Line 1: Awarded Line
        draw_centered_mixed_text(
            H * 0.44,
            ["This certificate is awarded to Mr./Ms. ", name.upper()],
            [font_reg, font_bold],
            ["#444444", "#111111"]
        )

        # 2. Line 2: Completion Line
        draw_centered_mixed_text(
            H * 0.51,
            ["for the successful completion of the Professional Certificate Course in ", course_name],
            [font_reg, font_bold],
            ["#444444", "#111111"]
        )

        # 3. Line 3: Conducted Line
        draw_centered_mixed_text(
            H * 0.57,
            ["conducted by ", "BM Academy."],
            [font_reg, font_bold],
            ["#444444", "#111111"]
        )

        # 4. Bottom Details (Aligned with dotted lines)
        # Certificate ID (~22% W)
        l, t, r, b = draw.textbbox((0, 0), certificate_id, font=font_bottom)
        draw.text((int((W * 0.22) - (r - l) / 2), int(H * 0.812)), certificate_id, fill="#333333", font=font_bottom)

        # Date of Issue (~78% W)
        l, t, r, b = draw.textbbox((0, 0), date_str, font=font_bottom)
        draw.text((int((W * 0.78) - (r - l) / 2), int(H * 0.812)), date_str, fill="#333333", font=font_bottom)

        # Save result as PDF
        img.save(output_path, "PDF", resolution=150.0)
        print(f"Certificate {certificate_id} generated successfully at {output_path}")
        return output_path
        
    except Exception as e:
        # Log error to terminal and a local log file
        err_msg = f"ERROR generating certificate {certificate_id}: {e}"
        print(err_msg)
        with open("cert_error.log", "a") as f:
            f.write(f"{datetime.utcnow()}: {err_msg}\n")
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
        words = [w.strip() for w in course_name.split() if w.strip()]
        if not words:
            return "GEN"
        initials = "".join([w[0].upper() for w in words])
        return initials if initials else "GEN"

    def _generate_manual_certificate_id(self, course_name, issued_date=None):
        year = issued_date.year if issued_date else datetime.utcnow().year
        course_code = self._get_course_code(course_name)
        prefix = f"BM{course_code}{year}"
        last_cert = (
            Certificate.objects(certificate_id__startswith=prefix)
            .order_by("-certificate_id")
            .first()
        )
        if last_cert:
            try:
                last_number = int(last_cert.certificate_id.split(prefix)[-1])
                next_number = last_number + 1
            except (ValueError, IndexError):
                # Fallback to incrementing based on total count if pattern fails
                next_number = Certificate.objects(certificate_id__startswith=prefix).count() + 1
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
        
        # Use simple date format if system doesn't support stripped-zero
        try:
            date_str = current_time.strftime("%#m/%#d/%Y")
        except:
            date_str = current_time.strftime("%m/%d/%Y")
            
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
    # MANUAL CERTIFICATE (PERFECT ALIGNMENT)
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
        
        # Format date for display on certificate
        try:
            date_str = issued_dt.strftime("%#m/%#d/%Y")
        except:
            date_str = issued_dt.strftime("%m/%d/%Y")
            
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
