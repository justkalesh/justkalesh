import { navigate } from './router.js';

let navItemsList = [];
let movePillCallback = null;
let updateStylesCallback = null;

export function syncNavWithUrl(pathname) {
  if (navItemsList.length === 0) return;
  
  const isProjects = pathname.includes('projects');
  const isAbout = pathname.includes('about');
  const isResume = pathname.includes('resume');
  
  navItemsList.forEach(item => {
    item.classList.remove('active', 'active-clicked');
    const href = item.getAttribute('href');
    if (isProjects && href === 'projects.html') {
      item.classList.add('active');
    } else if (isAbout && href === 'about.html') {
      item.classList.add('active');
    } else if (isResume && href === 'resume.html') {
      item.classList.add('active');
    } else if (!isProjects && !isAbout && !isResume && href === 'index.html') {
      item.classList.add('active');
    }
  });

  const currentActive = document.querySelector('.nav-item.active') || navItemsList[0];
  if (movePillCallback && updateStylesCallback) {
    movePillCallback(currentActive);
    updateStylesCallback(currentActive);
  }
}

export function initNavPill() {
  const desktopNav = document.getElementById('desktop-nav');
  const navPill = document.getElementById('nav-pill');
  const navItems = document.querySelectorAll('.nav-item');

  if (!desktopNav || !navPill || navItems.length === 0) return;
  
  navItemsList = Array.from(navItems);

  movePillCallback = function movePill(target) {
    const rect = target.getBoundingClientRect();
    const navRect = desktopNav.getBoundingClientRect();
    
    navPill.style.width = `${rect.width}px`;
    navPill.style.height = `${rect.height}px`;
    navPill.style.left = `${rect.left - navRect.left}px`;
    navPill.style.top = `${rect.top - navRect.top}px`;
  };

  updateStylesCallback = function updateTextStyles(targetItem) {
    navItems.forEach(nav => {
      if (nav === targetItem) {
        nav.classList.remove('text-on-surface-variant', 'font-medium');
        nav.classList.add('text-primary', 'font-extrabold');
      } else {
        nav.classList.remove('text-primary', 'font-extrabold');
        nav.classList.add('text-on-surface-variant', 'font-medium');
      }
    });
  };

  // Setup initial active state based on URL
  syncNavWithUrl(window.location.pathname);

  // Resize handler
  window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.nav-item.active-clicked') || document.querySelector('.nav-item.active');
    movePillCallback(currentActive);
  });

  // Click handlers
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      
      navItems.forEach(n => n.classList.remove('active-clicked'));
      item.classList.add('active-clicked');
      
      movePillCallback(item);
      updateStylesCallback(item);

      if (href && href !== '#' && !href.startsWith('javascript:')) {
        e.preventDefault(); 
        
        setTimeout(() => {
          navigate(href);
        }, 300); // Wait 300ms for the CSS transition to finish
      }
    });
  });
}
