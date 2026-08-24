import fs from 'fs';
import path from 'path';

const uploadDir = 'C:\\Users\\kalas\\.gemini\\antigravity-ide\\brain\\67fadacb-bbc1-45e3-9ec3-9246c69c78e8\\.user_uploaded';
const publicDir = 'c:\\Important\\Code\\justkalesh\\public';

// Get all jpgs, sort by name
const files = fs.readdirSync(uploadDir).filter(f => f.endsWith('.jpg')).sort();

// The last 4 are the ones we want
const last4 = files.slice(-4);

const names = ['cert_pariksha.jpg', 'cert_training.jpg', 'cert_campusrush.jpg', 'cert_hackathon101.jpg'];

for (let i = 0; i < 4; i++) {
  fs.copyFileSync(
    path.join(uploadDir, last4[i]),
    path.join(publicDir, names[i])
  );
  console.log(`Copied ${last4[i]} to ${names[i]}`);
}
