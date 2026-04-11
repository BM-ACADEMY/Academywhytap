import threading
from django.core.mail import send_mail
from django.conf import settings
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Enquiry
from .serializers import EnquirySerializer

def send_enquiry_email_alert(enquiry):
    """Send email notification in a background thread"""
    try:
        subject = f"🎓 New Course Enquiry: {enquiry.name}"
        message = f"""
        You have received a new student enquiry from the "Apply Now" form:

        👤 Name: {enquiry.name}
        📞 Phone: {enquiry.phone}
        📧 Email: {enquiry.email}
        📚 Interested Course: {enquiry.course}
        🎓 Qualification: {enquiry.qualification}
        📅 Year of Passing: {enquiry.passing_year}

        Submitted at: {enquiry.created_at.strftime('%Y-%m-%d %H:%M')}
        """
        
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=["mdarsath.bmtechx@gmail.com"],  # Your official inbox
            fail_silently=False,
        )
        print(f"✅ Email alert sent for enquiry: {enquiry.name}")
    except Exception as e:
        print(f"❌ Email alert failed: {e}")

class EnquiryCreateView(generics.CreateAPIView):
    serializer_class = EnquirySerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Create the Enquiry instance in MongoDB
        instance = Enquiry.objects.create(**serializer.validated_data)

        # Trigger background email notification
        threading.Thread(target=send_enquiry_email_alert, args=(instance,)).start()

        return Response(
            {
                "id": str(instance.id),
                "message": "Enquiry submitted successfully",
                "name": instance.name,
                "course": instance.course,
                "created_at": instance.created_at,
            },
            status=status.HTTP_201_CREATED,
        )

class EnquiryListView(generics.ListAPIView):
    serializer_class = EnquirySerializer
    permission_classes = [permissions.AllowAny] # You can restrict this to IsAdminUser later

    def get_queryset(self):
        return Enquiry.objects.all().order_by('-created_at')

class EnquiryDeleteView(generics.DestroyAPIView):
    permission_classes = [permissions.AllowAny] # In development. Set to IsAdminUser for production.
    
    def delete(self, request, pk):
        try:
            enquiry = Enquiry.objects.get(id=pk)
            enquiry.delete()
            return Response({"message": "Enquiry deleted successfully"}, status=status.HTTP_200_OK)
        except Enquiry.DoesNotExist:
            return Response({"error": "Enquiry not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
