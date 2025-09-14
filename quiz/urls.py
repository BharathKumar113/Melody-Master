from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.add_song, name='add_song'),
    path('play/', views.play_song, name='play_song'),
    path('check/', views.check_answer, name='check_answer'),
    path('restart/', views.restart_quiz, name='restart_quiz'),
    path('reset-stats/', views.reset_stats, name='reset_stats'),
path('stats/', views.stats, name='stats'),

]
