from django import forms
from .models import Song

class SongForm(forms.ModelForm):
    class Meta:
        model = Song
        fields = ['song_title', 'movie_title', 'audio_file']
        widgets = {
            'song_title': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter song title',
            }),
            'movie_title': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter movie or album name',
            }),
            'audio_file': forms.ClearableFileInput(attrs={
                'class': 'file-input',
                'accept': 'audio/*',
            }),
        }
        labels = {
            'song_title': '🎵 Song Title',
            'movie_title': '🎬 Movie / Album',
            'audio_file': '📂 Upload Song File',
        }
