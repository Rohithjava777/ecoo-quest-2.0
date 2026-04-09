import fs from 'fs';
import https from 'https';
import path from 'path';

const basePath = process.cwd();
const publicDir = path.join(basePath, 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const downloads = [
  { url: 'https://m.media-amazon.com/images/M/MV5BODdjMjM3ZGItMThiYS00ZTcwLWE4NTktZGM2ZGM1NTMwNDI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', name: 'poster1.jpg' },
  { url: 'https://images.unsplash.com/photo-1542051812-4ee8000490b6?auto=format&fit=crop&w=1280', name: 'backdrop1.jpg' },
  { url: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', name: 'poster2.jpg' },
  { url: 'https://images.unsplash.com/photo-1440407876336-62333a6f010f?auto=format&fit=crop&w=1280', name: 'backdrop2.jpg' },
  { url: 'https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItZjQwMy00Njc1LWE4ZWUtNTE2NDA0ZTNiMTMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', name: 'poster3.jpg' },
  { url: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=1280', name: 'backdrop3.jpg' },
  { url: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg', name: 'poster4.jpg' },
  { url: 'https://images.unsplash.com/photo-1581404176465-b3e18a804ed8?auto=format&fit=crop&w=1280', name: 'backdrop4.jpg' },
  { url: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTYtOWQzYWVNMTI2NjM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', name: 'poster5.jpg' },
  { url: 'https://images.unsplash.com/photo-1509204981146-5f560f4e3cfa?auto=format&fit=crop&w=1280', name: 'backdrop5.jpg' },
  { url: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg', name: 'poster6.jpg' },
  { url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1280', name: 'backdrop6.jpg' },
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With Status Code: ${res.statusCode}`));
      }
    });
  });
};

async function run() {
  console.log("Downloading images locally to public folder...");
  for (const file of downloads) {
    try {
        await downloadImage(file.url, path.join(publicDir, file.name));
        console.log(`Downloaded ${file.name}`);
    } catch (e) {
        console.error(`Failed to download ${file.name}:`, e.message);
    }
  }
}

run();
