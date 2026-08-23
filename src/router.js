import { syncNavWithUrl } from './nav.js';
import { initStickers } from './main.js';

export async function navigate(href) {
  try {
    const response = await fetch(href);
    if (!response.ok) throw new Error('Network response was not ok');
    const text = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const newMain = doc.querySelector('main');
    const currentMain = document.querySelector('main');
    
    if (newMain && currentMain) {
      // Fade out current content slightly for a smoother transition
      currentMain.style.opacity = '0';
      currentMain.style.transition = 'opacity 0.2s ease-out';
      
      setTimeout(() => {
        currentMain.innerHTML = newMain.innerHTML;
        currentMain.className = newMain.className;
        currentMain.style.opacity = '1';
        
        initStickers();
        
        // Scroll to top automatically on route change
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 200);
    }

    document.title = doc.title;
    window.history.pushState({}, '', href);
    syncNavWithUrl(new URL(href, window.location.origin).pathname);

  } catch (error) {
    console.error("Seamless navigation failed, falling back to hard reload", error);
    window.location.href = href; 
  }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', async () => {
  try {
    const response = await fetch(window.location.href);
    if (!response.ok) throw new Error('Network response was not ok');
    const text = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const newMain = doc.querySelector('main');
    const currentMain = document.querySelector('main');
    
    if (newMain && currentMain) {
      currentMain.style.opacity = '0';
      currentMain.style.transition = 'opacity 0.2s ease-out';
      setTimeout(() => {
        currentMain.innerHTML = newMain.innerHTML;
        currentMain.className = newMain.className;
        currentMain.style.opacity = '1';
        initStickers();
      }, 200);
    }

    document.title = doc.title;
    syncNavWithUrl(window.location.pathname);
  } catch (error) {
    window.location.reload(); 
  }
});
