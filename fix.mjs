import fs from 'fs';

const files = ['index.html', 'about.html', 'resume.html', 'projects.html'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Update footer main classes
  content = content.replace(
    /pt-\[24px\] pb-\[80px\] md:pb-\[24px\]">/,
    'pt-[32px] pb-[96px] md:pb-[24px] gap-6 md:gap-0">'
  );
  
  // Update Brand margin
  content = content.replace(
    /<div class="text-headline-md font-extrabold text-on-surface mb-4 md:mb-0">/,
    '<div class="text-headline-md font-extrabold text-on-surface">'
  );
  
  // Update flex container for links
  content = content.replace(
    /<!-- Links -->\s*<div class="flex gap-6">/,
    '<!-- Links -->\n    <div class="flex flex-wrap justify-center gap-4 md:gap-6">'
  );
  
  // Add Email link after Instagram
  const instaRegex = /(<a href="https:\/\/www\.instagram\.com\/kalash\.who\/".*?<\/a>)/;
  if (!content.includes('mailto:parth.ie.kalash@gmail.com')) {
    content = content.replace(
        instaRegex,
        '$1\n      <a href="mailto:parth.ie.kalash@gmail.com" target="_blank" rel="noopener noreferrer" class="text-label-sm text-on-surface-variant hover:text-primary hover:scale-105 transition-transform active:scale-95 font-bold">Email</a>'
    );
  }

  fs.writeFileSync(file, content);
}
console.log('Success');
