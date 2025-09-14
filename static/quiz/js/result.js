window.addEventListener('load', () => {
    const resultTextEl = document.getElementById('resultText');
    const cardEl = document.querySelector('.card');
    const resultText = resultTextEl ? resultTextEl.innerText.trim().toLowerCase() : "";

    const duration = 20000; // 20 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function fireConfetti(particleCount, colors) {
        const origins = [
            { x: 0.5, y: 0 },    // top center
            { x: 0.5, y: 1 },    // bottom center
            { x: 0, y: 0.5 },    // left center
            { x: 1, y: 0.5 }     // right center
        ];
        origins.forEach(origin => {
            confetti(Object.assign({}, defaults, { particleCount, colors, origin }));
        });
    }

    if (resultText.includes("correct")) {
        // Play celebratory sound
        const fanfare = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
        fanfare.play().catch(()=>{});

        // Vibrant multi-color confetti including green
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if(timeLeft <= 0) { clearInterval(interval); return; }
            const particleCount = 60 * (timeLeft / duration);
            fireConfetti(particleCount, [
                '#ff0a54', '#ff477e', '#ff7096', '#ff85a1',
                '#fbb1b9', '#f9bec7', '#f7cad0', '#00ff00', '#00cc44', '#00aa33'
            ]);
        }, 250);

    } else {
        // Wrong answer effect: shake + gray confetti
        if(cardEl) cardEl.classList.add('wrong-answer');

        const buzz = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");
        buzz.play().catch(()=>{});

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if(timeLeft <= 0) { clearInterval(interval); return; }
            const particleCount = 40 * (timeLeft / duration);
            fireConfetti(particleCount, ['#888888', '#aaaaaa', '#cccccc']);
        }, 300);
    }
});
