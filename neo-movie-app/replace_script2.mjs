import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/bg-\[#1A0033\]/g, 'bg-black');
  content = content.replace(/bg-\[#2B0055\]/g, 'bg-[#4C1D95]');
  content = content.replace(/bg-\[#2D0A46\]/g, 'bg-[#2A054F]');
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
