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

class GoogleReviewsView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        # NOTE: In production, you would use a service or scraping logic here
        # to fetch from the specific Google link provided by the user.
        # For now, we return the dynamic data from the backend.
        data = {
            "stats": {"rating": 4.9, "count": 32},
            "reviews": [
                {
                    "name": "Sindhu Sindhuja",
                    "text": "I enrolled in a Data Analyst course in Pondicherry at BM Academy, and it was an excellent learning experience. The staff was incredibly supportive throughout the journey.",
                    "time": "2 months ago",
                    "rating": 5
                },
                {
                    "name": "Vasanth J",
                    "text": "Best institute for full stack and digital marketing. The placement team is very active and helps with mock interviews.",
                    "time": "3 months ago",
                    "rating": 5
                },
                {
                    "name": "Arjun M",
                    "text": "The AI-Powered Digital Marketing course is a game changer. Highly recommended!",
                    "time": "1 month ago",
                    "rating": 5
                }
            ],
            "videoReviews": [
                { "name": "Review 1", "id": "dQw4w9WgXcQ" },
                { "name": "Review 2", "id": "dQw4w9WgXcQ" },
                { "name": "Review 3", "id": "dQw4w9WgXcQ" },
                { "name": "Review 4", "id": "dQw4w9WgXcQ" }
            ]
        }
        return Response(data, status=status.HTTP_200_OK)
