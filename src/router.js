import { syncNavWithUrl } from './nav.js';
import { initStickers } from './main.js';

// Ensures we always fetch .html but display clean URLs
function toFetchUrl(href) {
  if (href.endsWith('.html')) return href;
  if (href === '/' || href === '') return '/index.html';
  return href.replace(/\/$/, '') + '.html';
}

function toCleanUrl(href) {
  if (href === '/index.html' || href === 'index.html') return '/';
  return href.replace(/\.html$/, '');
}

export async function navigate(href) {
  try {
    const fetchUrl = toFetchUrl(href);
    const response = await fetch(fetchUrl);
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
        
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 200);
    }

    document.title = doc.title;
    const cleanUrl = toCleanUrl(href);
    window.history.pushState({}, '', cleanUrl);
    syncNavWithUrl(cleanUrl);

  } catch (error) {
    console.error("Seamless navigation failed, falling back to hard reload", error);
    window.location.href = href; 
  }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', async () => {
  try {
    const fetchUrl = toFetchUrl(window.location.pathname);
    const response = await fetch(fetchUrl);
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
