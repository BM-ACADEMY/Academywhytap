from django.urls import path
from .views import EnquiryCreateView, EnquiryListView, EnquiryDeleteView, GoogleReviewsView

urlpatterns = [
    path('create/', EnquiryCreateView.as_view(), name='enquiry-create'),
    path('list/', EnquiryListView.as_view(), name='enquiry-list'),
    path('google-reviews/', GoogleReviewsView.as_view(), name='google-reviews'),
    path('<str:pk>/', EnquiryDeleteView.as_view(), name='enquiry-delete'),
]
