from django.urls import path
from .views import (
    CertificateViewSet,
    verify_certificate,
    download_certificate,
    view_certificate
)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"certificates", CertificateViewSet, basename="certificate")

urlpatterns = [
    # Public verification
    path("certificates/verify/<str:certificate_id>/", verify_certificate),
    # Public download (Forces download)
    path("certificates/download/<str:certificate_id>/", download_certificate),
    # Admin/Public View (In-browser preview)
    path("certificates/view/<str:certificate_id>/", view_certificate),
]

urlpatterns += router.urls
