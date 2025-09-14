from django.db import models

class Song(models.Model):
    song_title = models.CharField(max_length=100)
    movie_title = models.CharField(max_length=100)
    audio_file = models.FileField(upload_to='songs/')
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.song_title} ({self.movie_title})"
