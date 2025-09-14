from django.shortcuts import render, redirect
from .models import Song
from .forms import SongForm
import random

def home(request):
    return render(request, 'quiz/home.html')

def add_song(request):
    if request.method == 'POST':
        form = SongForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = SongForm()
    return render(request, 'quiz/add_song.html', {'form': form})

def play_song(request):
    all_songs = list(Song.objects.all())
    if not all_songs:
        return redirect('add_song')

    # Get or initialize played songs from session
    played_songs = set(request.session.get('played_songs', []))

    # Filter songs not yet played
    remaining_songs = [song for song in all_songs if song.id not in played_songs]

    if not remaining_songs:
        # All songs played
        return render(request, 'quiz/all_done.html')

    # Pick a random song from remaining
    song = random.choice(remaining_songs)

    # Save the song id in session to prevent replay even if page refreshes
    request.session['current_song_id'] = song.id
    played_songs.add(song.id)
    request.session['played_songs'] = list(played_songs)

    return render(request, 'quiz/play_song.html', {'song': song})


def check_answer(request):
    if request.method == 'POST':
        song_id = request.session.get('current_song_id')
        if not song_id:
            return redirect('play_song')

        song = Song.objects.get(id=song_id)
        user_answer = request.POST.get('answer', '').strip().lower()
        time_taken = int(request.POST.get('time', '0'))

        # Clear current song id
        request.session['current_song_id'] = None

        # --- STATS TRACKING ---
        stats = request.session.get('stats', {
            'total': 0,
            'correct': 0,
            'wrong': 0,
            'total_time': 0
        })

        stats['total'] += 1
        stats['total_time'] += time_taken

        if user_answer == song.song_title.lower() or user_answer == song.movie_title.lower():
            result = "Correct! 🎉"
            stats['correct'] += 1
        else:
            result = f"Wrong! The correct answer was: {song.song_title} ({song.movie_title})"
            stats['wrong'] += 1

        request.session['stats'] = stats
        request.session.modified = True

        return render(request, 'quiz/result.html', {'result': result, 'time_taken': time_taken})



def restart_quiz(request):
    request.session['played_songs'] = []
    request.session['current_song_id'] = None
    return redirect('play_song')
    
def stats(request):
    stats = request.session.get('stats', {
        'total': 0,
        'correct': 0,
        'wrong': 0,
        'total_time': 0
    })

    avg_time = round(stats['total_time'] / stats['total'], 2) if stats['total'] > 0 else 0
    correct_percent = round((stats['correct'] / stats['total']) * 100) if stats['total'] > 0 else 0
    wrong_percent = round((stats['wrong'] / stats['total']) * 100) if stats['total'] > 0 else 0

    return render(request, 'quiz/stats.html', {
        'stats': stats,
        'avg_time': avg_time,
        'correct_percent': correct_percent,
        'wrong_percent': wrong_percent
    })
def reset_stats(request):
    if 'stats' in request.session:
        del request.session['stats']
        request.session.modified = True
    return redirect('stats')
