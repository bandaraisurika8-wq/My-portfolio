// Fade animation
const fades = document.querySelectorAll(".fade");

function handleFade() {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleFade);
window.addEventListener("load", handleFade);

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!name.value || !email.value || !message.value) {
    alert("Please fill in all fields");
    return;
  }

  alert("Message sent successfully!");
  this.reset();
});

// Theme toggle
const toggle = document.getElementById("toggleTheme");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.classList.toggle("fa-sun");
  toggle.classList.toggle("fa-moon");
});

// 🎯 Typing Effect
const typingElement = document.querySelector(".typing-text");
const text = "Web Developer";
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 120);
  }
}

window.addEventListener("load", typeText);
