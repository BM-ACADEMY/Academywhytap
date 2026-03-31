import threading
from django.core.mail import send_mail
from django.conf import settings
from rest_framework import generics, permissions, status
from rest_framework.response import Response

from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactMessageListView(generics.ListAPIView):
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny] # In development, keeping AllowAny or use TokenAuthentication

    def get_queryset(self):
        return ContactMessage.objects.all().order_by('-created_at')


def send_email_in_background(subject, message):
    """Send email in a background thread"""
    try:
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=["mdarsath.bmtechx@gmail.com"],  # ✅ Your inbox here
            fail_silently=False,
        )
    except Exception as e:
        print("❌ Email sending failed:", e)


class ContactMessageCreateView(generics.GenericAPIView):
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        instance = ContactMessage.objects.create(**serializer.validated_data)

        # Prepare email content
        subject = f"📩 New Contact Message from {instance.name}"
        message = f"""
You have received a new contact form submission:

👤 Name: {instance.name}
📧 Email: {instance.email}
📘 Subject: {instance.subject}

📝 Message:
{instance.message}
"""

        # Send email asynchronously
        threading.Thread(target=send_email_in_background, args=(subject, message)).start()

        return Response(
            {
                "id": str(instance.id),
                "name": instance.name,
                "email": instance.email,
                "subject": instance.subject,
                "message": instance.message,
                "created_at": instance.created_at,
            },
            status=status.HTTP_201_CREATED,
        )


from rest_framework.views import APIView

class ContactMessageDeleteView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def delete(self, request, pk):
        try:
            msg = ContactMessage.objects.get(id=pk)
            msg.delete()
            return Response({"message": "Successfully deleted"}, status=status.HTTP_200_OK)
        except ContactMessage.DoesNotExist:
            return Response({"error": "Message not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


