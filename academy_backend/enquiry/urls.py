from django.urls import path
from .views import EnquiryCreateView, EnquiryListView, EnquiryDeleteView

urlpatterns = [
    path('create/', EnquiryCreateView.as_view(), name='enquiry-create'),
    path('list/', EnquiryListView.as_view(), name='enquiry-list'),
    path('<str:pk>/', EnquiryDeleteView.as_view(), name='enquiry-delete'),
]
