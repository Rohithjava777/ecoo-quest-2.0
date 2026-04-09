import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Replacing bright/white/black tailwind classes with dark theme components
  content = content.replace(/bg-white/g, 'bg-[#1A0033]');
  content = content.replace(/text-black/g, 'text-white');
  content = content.replace(/border-black/g, 'border-borderBlack');
  content = content.replace(/bg-yellow-100/g, 'bg-[#2B0055]'); 
  content = content.replace(/text-gray-900/g, 'text-gray-200');
  content = content.replace(/text-gray-700/g, 'text-gray-300');
  content = content.replace(/text-gray-600/g, 'text-gray-300');
  content = content.replace(/bg-red-200/g, 'bg-red-900'); 
  content = content.replace(/bg-gray-100/g, 'bg-[#2D0A46]'); 
  fs.writeFileSync(filePath, content);
}

const dir = 'c:\\Users\\ROHIT\\Downloads\\eco\\neo-movie-app\\src';
const walk = (d) => {
  fs.readdirSync(d).forEach(file => {
    const p = path.join(d, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.jsx')) {
      replaceInFile(p);
    }
  });
};

walk(dir);
