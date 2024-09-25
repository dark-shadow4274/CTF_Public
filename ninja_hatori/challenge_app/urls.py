from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Root URL for the index view
    #path('challenge/', views.challenge_response, name='challenge_response'),  # Separate URL for challenge_response
]
