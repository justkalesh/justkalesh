import { navigate } from './router.js';

let navItemsList = [];
let movePillCallback = null;
let updateStylesCallback = null;

// Helper: normalize an href to its clean page name for comparison
function getPageName(href) {
  if (!href) return '';
  return href.replace(/\.html$/, '').replace(/^\//, '').split('#')[0].split('?')[0];
}

export function syncNavWithUrl(pathname) {
  if (navItemsList.length === 0) return;
  
  const isProjects = pathname.includes('projects');
  const isAbout = pathname.includes('about');
  const isResume = pathname.includes('resume');
  const isCertification = pathname.includes('certification');
  const isMore = pathname.includes('more');
  
  
  // Update desktop nav items
  navItemsList.forEach(item => {
    item.classList.remove('active', 'active-clicked');
    const page = getPageName(item.getAttribute('href'));
    if (isProjects && page === 'projects') {
      item.classList.add('active');
    } else if (isAbout && page === 'about') {
      item.classList.add('active');
    } else if (isResume && page === 'resume') {
      item.classList.add('active');
    } else if (isCertification && page === 'certification') {
      item.classList.add('active');
    } else if (isMore && page === 'more') {
      item.classList.add('active');
    } else if (!isProjects && !isAbout && !isResume && !isCertification && !isMore && (page === 'index' || page === '')) {
      item.classList.add('active');
    }
  });

  // Update brand text dynamically
  const brandEl = document.querySelector('.tracking-tight');
  if (brandEl) {
     if (isProjects) brandEl.textContent = 'Projects';
     else if (isAbout) brandEl.textContent = 'About Me';
     else if (isResume) brandEl.textContent = 'Resume';
     else if (isCertification) brandEl.textContent = 'Certification';
     else if (isMore) brandEl.textContent = 'More';
     else brandEl.textContent = 'Home';
  }

  // Update mobile nav items pill UI
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    item.className = 'mobile-nav-item text-headline-sm text-on-surface-variant font-medium transition-colors text-center';
    const page = getPageName(item.getAttribute('href'));
    let isActive = false;
    if (isProjects && page === 'projects') isActive = true;
    else if (isAbout && page === 'about') isActive = true;
    else if (isResume && page === 'resume') isActive = true;
    else if (isCertification && page === 'certification') isActive = true;
    else if (isMore && page === 'more') isActive = true;
    else if (!isProjects && !isAbout && !isResume && !isCertification && !isMore && (page === 'index' || page === '')) isActive = true;

    if (isActive) {
      item.className = 'mobile-nav-item text-headline-sm text-primary font-extrabold px-8 py-3 rounded-full border-[3px] border-on-surface bg-surface-container shadow-[4px_4px_0px_0px_rgba(13,28,47,1)] transition-colors text-center';
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
