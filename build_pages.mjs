import fs from 'fs';

const indexPath = 'c:/Important/Code/justkalesh/index.html';
const aboutStitch = 'c:/Important/Code/justkalesh/stitch_kalash_s_vibrant_portfolio_portfolio/kalash_about_me_neo_pop/code.html';
const resumeStitch = 'c:/Important/Code/justkalesh/stitch_kalash_s_vibrant_portfolio_portfolio/kalash_resume_neo_pop/code.html';

const indexHtml = fs.readFileSync(indexPath, 'utf-8');
const aboutHtml = fs.readFileSync(aboutStitch, 'utf-8');
const resumeHtml = fs.readFileSync(resumeStitch, 'utf-8');

// Regex to extract <main>...</main> including attributes
const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/i;

const indexMatch = indexHtml.match(mainRegex);
if (!indexMatch) throw new Error("Could not find <main> in index.html");

const prefix = indexHtml.substring(0, indexMatch.index);
const suffix = indexHtml.substring(indexMatch.index + indexMatch[0].length);

// Extract main tags from stitch files
const aboutMainMatch = aboutHtml.match(mainRegex);
const resumeMainMatch = resumeHtml.match(mainRegex);

// Replace titles
const aboutPrefix = prefix.replace(/<title>.*?<\/title>/, '<title>About Kalash</title>');
const resumePrefix = prefix.replace(/<title>.*?<\/title>/, '<title>Kalash - Resume</title>');

fs.writeFileSync('c:/Important/Code/justkalesh/about.html', aboutPrefix + aboutMainMatch[0] + suffix);
fs.writeFileSync('c:/Important/Code/justkalesh/resume.html', resumePrefix + resumeMainMatch[0] + suffix);

console.log("Successfully generated about.html and resume.html!");
