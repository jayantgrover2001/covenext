import { projectsData } from './data.js';

// Navigation scroll effect
const nav = document.getElementById('mainNav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle?.classList.remove('active');
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .reveal-text');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Load featured projects on home page
function loadFeaturedProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const featuredProjects = projectsData.slice(0, 3);

    projectsGrid.innerHTML = featuredProjects.map(project => `
    <div class="project-card" onclick="window.location.href='/project.html?id=${project.id}'">
      <div class="project-image" style="background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 4rem;">
          ${project.category === 'Web Development' ? '🌐' : '📈'}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    if (heroContent && heroVisual) {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Initialize
loadFeaturedProjects();
