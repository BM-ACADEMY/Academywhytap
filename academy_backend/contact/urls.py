from django.urls import path
from .views import ContactMessageCreateView, ContactMessageListView, ContactMessageDeleteView

urlpatterns = [
    path('', ContactMessageCreateView.as_view(), name='contact-create'),
    path('all/', ContactMessageListView.as_view(), name='contact-list'),
    path('<str:pk>/', ContactMessageDeleteView.as_view(), name='contact-delete'),
]

