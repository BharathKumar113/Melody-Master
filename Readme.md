
![Python](https://img.shields.io/badge/Python-3.10-blue)
![Django](https://img.shields.io/badge/Django-Framework-green)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Contributions welcome](https://img.shields.io/badge/Contributions-welcome-brightgreen.svg)

---
# Melody Master

Melody Master is a Django-based interactive music quiz application. It allows users to upload songs, guess their titles or movie names, and track their performance with detailed statistics. This project is designed to combine fun with functionality while showcasing Django’s capabilities.

---

## Features

* **Song Uploads**: Add your own songs to the quiz by uploading audio files along with song and movie titles.
* **Randomized Quiz**: Each play session randomly selects a song, ensuring a fresh experience every time.
* **Answer Checking**: Validate answers by matching against song or movie titles.
* **Performance Tracking**: Track correct, wrong, and total attempts, along with the time taken for each guess.
* **Statistics Dashboard**: View overall performance stats, including accuracy and average response time.
* **Session Persistence**: Prevents repeated playback of the same song during one quiz session.
* **Restart & Reset Options**: Restart the quiz or reset your statistics anytime.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BharathKumar113/Melody-Master.git
   cd Melody-Master
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:

   ```bash
   python manage.py migrate
   ```

5. Run the development server:

   ```bash
   python manage.py runserver
   ```

6. Open your browser at:

   ```
   http://127.0.0.1:8000/
   ```

---

## Project Structure

```
song/
│── quiz/                   # Django app containing views, models, forms, templates
│── song/          # Project configuration files
│── db.sqlite3              # Local development database
│── requirements.txt        # Dependencies
│── manage.py               # Django project entry point
│── static/                 # Static files (CSS, JS)
│── media/                  # Uploaded songs
```

---

## Usage

1. Add songs through the **Add Song** page.
2. Start the quiz using the **Play Song** option.
3. Listen to the song and submit your answer.
4. Check results instantly and continue playing.
5. View overall performance in the **Stats** page.

---

## Tech Stack

* **Backend**: Django, Python
* **Frontend**: HTML, Bootstrap
* **Database**: SQLite (default)
* **Libraries**: Django Forms, Random module, Session storage

---

## Contributing

Contributions, issues, and feature requests are welcome.
Feel free to fork this repository and submit a pull request.

---

