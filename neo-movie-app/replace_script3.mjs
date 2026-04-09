import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/bg-black/g, 'bg-[#14002B]'); // Changing embedded black components to dark purple
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
