import fs from 'fs';

const filePath = 'c:/Important/Code/justkalesh/projects.html';
let content = fs.readFileSync(filePath, 'utf-8');

// The replacement logic: for each project, find its 'absolute h-full...' div and turn it into an <a> tag.
// Also find its closing </div> which is right before `</div>\n\n        <!-- Content -->`.
// Actually, it's easier to just match the specific blocks.

const projects = [
  { 
    id: 'Food-Hunt', 
    url: 'https://food-hunt.app'
  },
  { 
    id: 'MedField', 
    url: 'https://medfield.in'
  },
  { 
    id: 'Building It Live', 
    url: 'https://buildingitlive.com'
  },
  { 
    id: 'Route429', 
    url: 'https://route429.parth-ie-kalash.workers.dev'
  }
];

let currentIndex = 0;

// Replace the `<div class="absolute h-full aspect-[4/3]...` with `<a href="..." ...`
content = content.replace(/<div class="absolute h-full aspect-\[4\/3\] group-hover:aspect-\[16\/10\][^>]+>/g, (match) => {
  const url = projects[currentIndex].url;
  currentIndex++;
  
  // replace `<div ` with `<a href="${url}" target="_blank" rel="noopener noreferrer" block cursor-pointer `
  // We'll just replace `<div ` with `<a href="${url}" target="_blank" rel="noopener noreferrer" `
  // and append ` block cursor-pointer"` to the class attribute.
  let newTag = match.replace('<div ', `<a href="${url}" target="_blank" rel="noopener noreferrer" `);
  newTag = newTag.replace('class="', 'class="block cursor-pointer ');
  return newTag;
});

// Replace the closing </div> of that container.
// It is always immediately before `</div>\n\n        <!-- Content -->`
content = content.replace(/<\/div>\n\s*<\/div>\n\n\s*<!-- Content -->/g, '</a>\n        </div>\n\n        <!-- Content -->');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Images wrapped with anchor tags successfully.');
