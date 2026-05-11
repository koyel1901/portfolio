// Typing effect
const typedText = document.querySelector(".typed-text");
const textArray = ["C++ & DSA", "Java Programming", "AI & NLP Enthusiast", "Problem Solver"];
let textIndex = 0, charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙";
toggleBtn.classList.add("dark-toggle");
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Dark Mode CSS
const darkModeStyles = `
  body.dark-mode {
    background: #121212;
    color: #f1f1f1;
  }
  body.dark-mode .navbar {
    background: rgba(34, 34, 34, 0.8);
  }
  body.dark-mode .project-card,
  body.dark-mode .cert-card,
  body.dark-mode .timeline-item {
    background: rgba(40, 40, 40, 0.8);
    color: #fff;
  }
  .dark-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 50%;
    background: #0077ff;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`;
const styleTag = document.createElement("style");
styleTag.innerHTML = darkModeStyles;
document.head.appendChild(styleTag);
