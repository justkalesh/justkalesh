import fs from 'fs';

const filePath = 'c:/Important/Code/justkalesh/projects.html';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace group-hover:aspect-[16/10] with group-hover:aspect-video
content = content.replace(/group-hover:aspect-\[16\/10\]/g, 'group-hover:aspect-video');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replaced aspect-[16/10] with aspect-video.');
