import fs from 'fs';

const filePath = 'c:/Important/Code/justkalesh/more.html';
let content = fs.readFileSync(filePath, 'utf-8');

// The class replacement was slightly off because maybe some don't have exactly this.
// Let's replace 'class="bg-surface-container-high rounded-xl md:rounded-2xl p-3 md:p-5 border-[3px]' 
// Actually, let's just replace `class="bg-surface-container-high rounded-xl md:rounded-2xl` with `class="w-[calc(50%-0.375rem)] md:w-[calc(33.333%-1rem)] bg-surface-container-high rounded-xl md:rounded-2xl`

content = content.replace(
  /class="bg-surface-container-high rounded-xl md:rounded-2xl/g,
  'class="w-[calc(50%-0.375rem)] md:w-[calc(33.333%-1rem)] bg-surface-container-high rounded-xl md:rounded-2xl'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed anchor classes.');
