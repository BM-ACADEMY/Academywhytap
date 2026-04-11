from rest_framework import serializers

class EnquirySerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=200)
    phone = serializers.CharField(max_length=20)
    email = serializers.EmailField(max_length=200)
    course = serializers.CharField(max_length=200)
    qualification = serializers.CharField(max_length=200)
    passing_year = serializers.CharField(max_length=20)
    created_at = serializers.DateTimeField(read_only=True)

    def validate_phone(self, value):
        # Basic validation for phone number length
        if len(value) < 10:
            raise serializers.ValidationError("Phone number must be at least 10 digits.")
        return value
