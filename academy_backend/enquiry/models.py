from mongoengine import Document, StringField, DateTimeField
from django.utils import timezone

class Enquiry(Document):
    name = StringField(required=True, max_length=200)
    phone = StringField(required=True, max_length=20)
    email = StringField(required=True, max_length=200)
    course = StringField(required=True, max_length=200)
    qualification = StringField(required=True, max_length=200)
    passing_year = StringField(required=True, max_length=20)
    created_at = DateTimeField(default=timezone.now)

    meta = {
        'collection': 'enquiries',
        'ordering': ['-created_at']
    }

    def __str__(self):
        return f"{self.name} - {self.course} ({self.created_at.strftime('%Y-%m-%d')})"
