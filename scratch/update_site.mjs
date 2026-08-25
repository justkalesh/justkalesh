import fs from 'fs';

const files = [
  'index.html',
  'about.html',
  'resume.html',
  'projects.html',
  'certification.html',
  'more.html'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Remove the Brand block from the footer
    const brandRegex = /\s*<!-- Brand -->\s*<div class="text-headline-md font-extrabold text-on-surface">\s*Kalash\s*<\/div>/;
    content = content.replace(brandRegex, '');
    
    // 2. Add Phone block to more.html
    if (file === 'more.html') {
      const emailBlockEnd = `        </a>\n\n      </div>\n    </section>`;
      const phoneBlock = `        </a>\n\n        <!-- Phone -->\n        <a href="tel:7570932021" class="bg-surface-container-high rounded-xl md:rounded-2xl p-3 md:p-5 border-[3px] border-on-surface shadow-[4px_4px_0px_0px_rgba(13,28,47,1)] md:shadow-[6px_6px_0px_0px_rgba(13,28,47,1)] bouncy-hover flex flex-col items-center gap-2 md:gap-3 text-center no-underline group">\n          <div class="w-10 h-10 md:w-14 md:h-14 bg-[#34A853] rounded-xl border-[2px] border-on-surface shadow-[3px_3px_0px_0px_rgba(13,28,47,1)] flex items-center justify-center group-hover:scale-110 transition-transform">\n            <span class="material-symbols-outlined text-3xl text-white" style="font-variation-settings: 'FILL' 1;">call</span>\n          </div>\n          <span class="text-label-lg font-extrabold text-on-surface">7570932021</span>\n        </a>\n\n      </div>\n    </section>`;
      
      content = content.replace(emailBlockEnd, phoneBlock);
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
