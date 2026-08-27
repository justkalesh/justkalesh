import fs from 'fs';

const filePath = 'c:/Important/Code/justkalesh/projects.html';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace aspect-square with aspect-[4/3]
content = content.replace(/aspect-square/g, 'aspect-[4/3]');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replaced aspect-square with aspect-[4/3] in projects.html.');
