const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const kontakForm = document.getElementById('kontak-form');

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Tutup menu kalau klik link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link berdasarkan posisi scroll
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });

  lastScroll = scrollY;
});

// Intersection Observer buat fade-in
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

fadeEls.forEach(el => fadeObserver.observe(el));

// Form validation
kontakForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama');
  const email = document.getElementById('email');
  const pesan = document.getElementById('pesan');
  let valid = true;

  // Reset
  [nama, email, pesan].forEach(field => {
    field.classList.remove('invalid');
  });
  document.querySelectorAll('.error-msg').forEach(msg => msg.textContent = '');

  if (!nama.value.trim()) {
    showError(nama, 'error-nama', 'Nama wajib diisi');
    valid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  if (!email.value.trim()) {
    showError(email, 'error-email', 'Email wajib diisi');
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    showError(email, 'error-email', 'Format email nggak valid');
    valid = false;
  }

  if (!pesan.value.trim()) {
    showError(pesan, 'error-pesan', 'Pesan wajib diisi');
    valid = false;
  }

  if (valid) {
    document.getElementById('form-success').classList.add('show');
    kontakForm.reset();
    setTimeout(() => {
      document.getElementById('form-success').classList.remove('show');
    }, 4000);
  }
});

function showError(input, errorId, msg) {
  input.classList.add('invalid');
  document.getElementById(errorId).textContent = msg;
}

// Tutup menu mobile kalau klik di luar
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  }
});
