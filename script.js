
// Typing animation for subtitle
const subtitles = [
    "Electronics & Computer Engineering student",
    "Web Developer",
    "Embedded Systems Enthusiast"
];
let subIndex = 0;
let charIndex = 0;

function typeSubtitle() {
    const element = document.querySelector(".animated-subtitle");
    if (!element) return;

    element.textContent = subtitles[subIndex].substring(0, charIndex);
    charIndex++;

    if (charIndex > subtitles[subIndex].length) {
        charIndex = 0;
        subIndex = (subIndex + 1) % subtitles.length;
        setTimeout(typeSubtitle, 1000);
    } else {
        setTimeout(typeSubtitle, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeSubtitle();
});

// Smooth scroll
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// Mobile menu toggle
const nav = document.querySelector("nav ul");
const toggleBtn = document.querySelector(".menu-toggle");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
});

// Dark Mode
const darkToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    darkToggle.checked = true;
}

// Toggle dark/light
darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});
