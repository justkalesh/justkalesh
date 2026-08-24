import fs from 'fs';

let certContent = fs.readFileSync('certification.html', 'utf8');

// Replace the Certifications Grid block entirely
const newGrid = `<section class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

      <!-- Certificate 1: Pariksha Pe Charcha -->
      <div class="bg-surface-container-high rounded-2xl md:rounded-3xl p-4 md:p-8 border-[3px] border-on-surface shadow-[5px_5px_0px_0px_rgba(13,28,47,1)] md:shadow-[8px_8px_0px_0px_rgba(13,28,47,1)] bouncy-hover relative overflow-hidden flex flex-col gap-3 md:gap-4">
        <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary-fixed rounded-full opacity-40 blur-2xl pointer-events-none"></div>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary-fixed rounded-xl border-[2px] border-on-surface shadow-[3px_3px_0px_0px_rgba(13,28,47,1)] flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-2xl text-primary" style="font-variation-settings: 'FILL' 1;">verified</span>
          </div>
          <div>
            <h3 class="text-body-lg md:text-headline-sm font-extrabold text-on-surface leading-tight">Pariksha Pe Charcha</h3>
            <p class="text-label-sm text-on-surface-variant font-medium">Prime Minister of India</p>
          </div>
        </div>
        <p class="text-body-md text-on-surface-variant">
          Letter of appreciation I got when I was in class 10th. It was the first time that I wrote something without thinking of grades and teachers—it was just a topic on how family and students' surroundings affect them.
        </p>
        <div class="flex items-center justify-between mt-auto pt-2">
          <span class="text-label-sm text-on-surface-variant font-bold bg-surface-container-highest px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_0px_rgba(13,28,47,1)]">2023</span>
          <a href="/cert_pariksha.jpg" target="_blank" rel="noopener noreferrer" class="text-label-sm text-primary font-extrabold hover:underline hover:scale-105 transition-transform">View Letter →</a>
        </div>
      </div>

      <!-- Certificate 2: Basics of Training & Leadership -->
      <div class="bg-surface-container-high rounded-2xl md:rounded-3xl p-4 md:p-8 border-[3px] border-on-surface shadow-[5px_5px_0px_0px_rgba(13,28,47,1)] md:shadow-[8px_8px_0px_0px_rgba(13,28,47,1)] bouncy-hover relative overflow-hidden flex flex-col gap-3 md:gap-4">
        <div class="absolute -top-4 -right-4 w-24 h-24 bg-secondary-fixed rounded-full opacity-40 blur-2xl pointer-events-none"></div>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-secondary-fixed rounded-xl border-[2px] border-on-surface shadow-[3px_3px_0px_0px_rgba(13,28,47,1)] flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-2xl text-secondary" style="font-variation-settings: 'FILL' 1;">verified</span>
          </div>
          <div>
            <h3 class="text-body-lg md:text-headline-sm font-extrabold text-on-surface leading-tight">Basics of Training & Leadership</h3>
            <p class="text-label-sm text-on-surface-variant font-medium">UniAthena & Cambridge International</p>
          </div>
        </div>
        <p class="text-body-md text-on-surface-variant">
          My first experience of an online course that helped me make a person believe in teamwork.
        </p>
        <div class="flex items-center justify-between mt-auto pt-2">
          <span class="text-label-sm text-on-surface-variant font-bold bg-surface-container-highest px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_0px_rgba(13,28,47,1)]">2025</span>
          <a href="/cert_training.jpg" target="_blank" rel="noopener noreferrer" class="text-label-sm text-secondary font-extrabold hover:underline hover:scale-105 transition-transform">View Certificate →</a>
        </div>
      </div>

      <!-- Certificate 3: Campus Rush -->
      <div class="bg-surface-container-high rounded-2xl md:rounded-3xl p-4 md:p-8 border-[3px] border-on-surface shadow-[5px_5px_0px_0px_rgba(13,28,47,1)] md:shadow-[8px_8px_0px_0px_rgba(13,28,47,1)] bouncy-hover relative overflow-hidden flex flex-col gap-3 md:gap-4">
        <div class="absolute -top-4 -right-4 w-24 h-24 bg-tertiary-fixed rounded-full opacity-40 blur-2xl pointer-events-none"></div>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-tertiary-fixed rounded-xl border-[2px] border-on-surface shadow-[3px_3px_0px_0px_rgba(13,28,47,1)] flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-2xl text-tertiary" style="font-variation-settings: 'FILL' 1;">verified</span>
          </div>
          <div>
            <h3 class="text-body-lg md:text-headline-sm font-extrabold text-on-surface leading-tight">Campus Rush</h3>
            <p class="text-label-sm text-on-surface-variant font-medium">Hackathon - 2nd Position</p>
          </div>
        </div>
        <p class="text-body-md text-on-surface-variant">
          My 3rd/4th hackathon, where I ended up in the 2nd position. The project is now also live! Someday I will work to make it work across our and many other campuses — <a href="https://food-hunt.app" target="_blank" class="text-tertiary font-bold hover:underline">food-hunt.app</a>.
        </p>
        <div class="flex items-center justify-between mt-auto pt-2">
          <span class="text-label-sm text-on-surface-variant font-bold bg-surface-container-highest px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_0px_rgba(13,28,47,1)]">2025</span>
          <a href="/cert_campusrush.jpg" target="_blank" rel="noopener noreferrer" class="text-label-sm text-tertiary font-extrabold hover:underline hover:scale-105 transition-transform">View Certificate →</a>
        </div>
      </div>

      <!-- Certificate 4: Hackathon 101 -->
      <div class="bg-surface-container-high rounded-2xl md:rounded-3xl p-4 md:p-8 border-[3px] border-on-surface shadow-[5px_5px_0px_0px_rgba(13,28,47,1)] md:shadow-[8px_8px_0px_0px_rgba(13,28,47,1)] bouncy-hover relative overflow-hidden flex flex-col gap-3 md:gap-4">
        <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary-fixed rounded-full opacity-40 blur-2xl pointer-events-none"></div>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary-fixed rounded-xl border-[2px] border-on-surface shadow-[3px_3px_0px_0px_rgba(13,28,47,1)] flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-2xl text-primary" style="font-variation-settings: 'FILL' 1;">verified</span>
          </div>
          <div>
            <h3 class="text-body-lg md:text-headline-sm font-extrabold text-on-surface leading-tight">Hackathon 101</h3>
            <p class="text-label-sm text-on-surface-variant font-medium">ARC</p>
          </div>
        </div>
        <p class="text-body-md text-on-surface-variant">
          This was my first hackathon. It was 24 hours long—didn't win, but learned a lot. That experience helped shape my thinking about how problems should and should not be solved.
        </p>
        <div class="flex items-center justify-between mt-auto pt-2">
          <span class="text-label-sm text-on-surface-variant font-bold bg-surface-container-highest px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_0px_rgba(13,28,47,1)]">2023</span>
          <a href="/cert_hackathon101.jpg" target="_blank" rel="noopener noreferrer" class="text-label-sm text-primary font-extrabold hover:underline hover:scale-105 transition-transform">View Certificate →</a>
        </div>
      </div>

    </section>`;

certContent = certContent.replace(/<section class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">[\s\S]*?<\/section>/, newGrid);
fs.writeFileSync('certification.html', certContent);

// Update more.html
let moreContent = fs.readFileSync('more.html', 'utf8');

// Replace contact form tag to use Web3Forms
moreContent = moreContent.replace(
  /<form id="contact-form" class="flex flex-col gap-4 md:gap-6 relative z-10">/,
  '<form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col gap-4 md:gap-6 relative z-10">\n          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">\n          <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form">\n          <input type="hidden" name="redirect" value="https://web3forms.com/success">'
);

// Remove the old mailto script at the bottom
moreContent = moreContent.replace(
  /<script>\s*\/\/ Contact form → mailto handler[\s\S]*?<\/script>/,
  ''
);

fs.writeFileSync('more.html', moreContent);

console.log("Done updating certification.html and more.html");
