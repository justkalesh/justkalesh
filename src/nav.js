export function initNavPill() {
  const desktopNav = document.getElementById('desktop-nav');
  const navPill = document.getElementById('nav-pill');
  const navItems = document.querySelectorAll('.nav-item');

  if (!desktopNav || !navPill || navItems.length === 0) return;

  const activeItem = document.querySelector('.nav-item.active') || navItems[0];

  function movePill(target) {
    const rect = target.getBoundingClientRect();
    const navRect = desktopNav.getBoundingClientRect();
    
    // Slight adjustments if padding/margin causes offset
    navPill.style.width = `${rect.width}px`;
    navPill.style.height = `${rect.height}px`;
    navPill.style.left = `${rect.left - navRect.left}px`;
    navPill.style.top = `${rect.top - navRect.top}px`;
  }

  function updateTextStyles(targetItem) {
    navItems.forEach(nav => {
      if (nav === targetItem) {
        nav.classList.remove('text-on-surface-variant', 'font-medium');
        nav.classList.add('text-primary', 'font-extrabold');
      } else {
        nav.classList.remove('text-primary', 'font-extrabold');
        nav.classList.add('text-on-surface-variant', 'font-medium');
      }
    });
  }

  // Initial positioning (wait for layout to settle)
  setTimeout(() => {
    movePill(activeItem);
    updateTextStyles(activeItem);
  }, 50);

  // Resize handler
  window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.nav-item.active-clicked') || activeItem;
    movePill(currentActive);
  });

  // Click handlers
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      
      // Mark as clicked active item so resize doesn't snap back to old active
      navItems.forEach(n => n.classList.remove('active-clicked'));
      item.classList.add('active-clicked');
      
      // Move pill and update text immediately
      movePill(item);
      updateTextStyles(item);

      // If it's a real page link, intercept it, play animation, then navigate
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        e.preventDefault(); 
        
        setTimeout(() => {
          window.location.href = href;
        }, 300); // Wait 300ms for the CSS transition to finish
      }
    });
  });
}
