/**
 * main.js — Home page JavaScript
 * Handles: Cat cursor follower, Mobile menu toggle
 */

import './style.css';
import { initNavPill } from './nav.js';

// ── Sliding Nav Pill ───────────────────────────────
initNavPill();

// ── Mobile Menu Toggle ──────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (mobileMenuClose && mobileMenu) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// Close mobile menu when clicking a link
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ── Custom Cursor (Desktop only) ──────────
const cursor = document.getElementById('custom-cursor');

if (cursor) {
  let mouseX = -100;
  let mouseY = -100;
  let prevMouseX = mouseX;
  let prevMouseY = mouseY;
  let currentAngle = 0;
  let targetAngle = 0;
  let hasMovedOnce = false;

  // Hide until first mouse movement
  cursor.style.opacity = '0';

  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) {
      cursor.style.display = 'none';
      return;
    }
    cursor.style.display = 'block';
    
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!hasMovedOnce) {
      hasMovedOnce = true;
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      cursor.style.opacity = '1';
    }
  });

  function animate() {
    const velX = mouseX - prevMouseX;
    const velY = mouseY - prevMouseY;

    // Only calculate new angle if moving significantly to avoid micro-jitter
    if (Math.hypot(velX, velY) > 2) {
      targetAngle = Math.atan2(velY, velX) * (180 / Math.PI) + 90;
    }

    // Smooth angle interpolation (handles 360 to 0 wrap around correctly)
    let diff = targetAngle - currentAngle;
    diff = ((diff + 180) % 360 + 360) % 360 - 180;
    currentAngle += diff * 0.15; // smooth rotation

    // Instant position tracking for zero lag, pivoting perfectly around the finger tip
    cursor.style.transform = `translate(${mouseX - 17.33}px, ${mouseY - 2.66}px) rotate(${currentAngle}deg)`;

    prevMouseX = mouseX;
    prevMouseY = mouseY;

    requestAnimationFrame(animate);
  }

  animate();
}

// ── Scroll to Top Button ──────────
const scrollToTopBtn = document.getElementById('scroll-to-top');
if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
