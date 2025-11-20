/* ============================================
   ArcLight Pulse - Branding Page Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

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

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all brand sections
  const sections = document.querySelectorAll('.brand-section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  // Copy to clipboard functionality for color codes
  const colorCodes = document.querySelectorAll('.color-info code, .gradient-swatch code, .code-examples code');
  colorCodes.forEach(code => {
    code.style.cursor = 'pointer';
    code.title = 'Click to copy';

    code.addEventListener('click', async () => {
      const text = code.textContent;
      try {
        await navigator.clipboard.writeText(text);

        // Visual feedback
        const originalText = code.textContent;
        code.textContent = '✓ Copied!';
        code.style.color = '#43e97b';

        setTimeout(() => {
          code.textContent = originalText;
          code.style.color = '';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });

  // Enhanced hover effect for logo cards
  const logoCards = document.querySelectorAll('.logo-card');
  logoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Color swatch click to preview
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      // Remove active class from all swatches
      colorSwatches.forEach(s => s.classList.remove('active'));

      // Add active class to clicked swatch
      this.classList.add('active');

      // Get the color from the preview
      const preview = this.querySelector('.color-preview');
      const bgColor = window.getComputedStyle(preview).backgroundColor;

      // Create temporary highlight effect
      const highlight = document.createElement('div');
      highlight.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${bgColor};
        z-index: 9999;
        animation: slideDown 0.5s ease-out forwards;
      `;

      // Add animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
      document.body.appendChild(highlight);

      // Remove after animation
      setTimeout(() => {
        highlight.remove();
        style.remove();
        this.classList.remove('active');
      }, 500);
    });
  });

  // Tagline card click to highlight
  const taglineCards = document.querySelectorAll('.tagline-card');
  let selectedTagline = document.querySelector('.tagline-card.primary-tagline');

  taglineCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove primary-tagline class from all cards
      taglineCards.forEach(c => c.classList.remove('primary-tagline'));

      // Add to clicked card
      this.classList.add('primary-tagline');
      selectedTagline = this;

      // Visual feedback
      this.style.animation = 'pulse 0.5s ease-out';
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
  });

  // Scroll progress indicator
  const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #43e97b 0%, #38f9d7 50%, #f093fb 100%);
      z-index: 9999;
      width: 0%;
      transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      progressBar.style.width = scrollPercent + '%';
    });
  };

  createScrollProgress();

  // Parallax effect for hero section
  const hero = document.querySelector('.brand-hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const heroHeight = hero.offsetHeight;

      if (scrolled < heroHeight) {
        const opacity = 1 - (scrolled / heroHeight);
        const scale = 1 + (scrolled / heroHeight) * 0.1;
        hero.style.opacity = opacity;
        hero.querySelector('.hero-content').style.transform = `scale(${scale})`;
      }
    });
  }

  // Download button interaction enhancement
  const downloadBtns = document.querySelectorAll('.download-btn');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes ripple {
          to { transform: scale(2); opacity: 0; }
        }
      `;
      document.head.appendChild(style);

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
        style.remove();
      }, 600);
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Press 'H' to scroll to top
    if (e.key === 'h' || e.key === 'H') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press 'L' to scroll to logos
    if (e.key === 'l' || e.key === 'L') {
      const logosSection = document.querySelector('.logos-section');
      if (logosSection) {
        logosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Press 'C' to scroll to colors
    if (e.key === 'c' || e.key === 'C') {
      const colorSection = document.querySelector('.color-grid');
      if (colorSection) {
        colorSection.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  console.log('🎨 ArcLight Pulse Branding Page Loaded');
  console.log('💡 Keyboard shortcuts: H (top), L (logos), C (colors)');
});
