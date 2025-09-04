// Handle section switching
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-container');
    sections.forEach(section => section.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.classList.add('active');

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const initialHash = window.location.hash.substring(1) || 'home';
    showSection(initialHash);
    typeWriter();
});

// Copy email address
function copyEmail() {
    const email = document.getElementById('email-address').innerText;
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Email address copied to clipboard!');
}

// Typewriter effect
const phrases = [
    "Ombachi of All Trades😉",
    "Telecommunication & Information Engineer",
    "Freelance Writer & Editor",
    "Problem Solver"
    
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter-text');

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typewriterElement.innerHTML = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 50);
        }
    } else {
        typewriterElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1500);
        } else {
            setTimeout(typeWriter, 100);
        }
    }
}

// Particle.js configuration
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#00FFFF", "#FF00FF"] },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00FFFF", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 1, "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

// Toggle dropdown menus
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle("hidden");
  }
}

function copyMpesaNumber() {
  const number = document.getElementById("mpesa-number").innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("😂 You’ve just bought me a plate of Ugali Skuma! M-Pesa number copied: " + number);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}
