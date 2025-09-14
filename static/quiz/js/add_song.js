// ---------------------------
// Fade-in effect for card
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  if (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.7s ease-out";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150);
  }

  // ---------------------------
  // Ripple Effect for Button
  // ---------------------------
  const btn = document.querySelector("button[type='submit']");
  if (btn) {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  }

  // ---------------------------
  // Input Highlight Animation
  // ---------------------------
  const inputs = document.querySelectorAll("form input, form textarea, form select");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.transition = "all 0.3s ease";
      input.style.transform = "scale(1.02)";
    });
    input.addEventListener("blur", () => {
      input.style.transform = "scale(1)";
    });
  });
});
// Show selected file name
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const fileName = document.getElementById("fileName");

  if (fileInput && fileName) {
    fileInput.addEventListener("change", () => {
      fileName.textContent = fileInput.files.length > 0 
        ? fileInput.files[0].name 
        : "No file chosen";
    });
  }
});
