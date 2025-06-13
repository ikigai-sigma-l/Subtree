// copy-folder.js
const fs = require('fs');
const path = require('path');

function copyFolderRecursiveSync(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    return;
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyFolderRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const packages = [
  'audioresample',
  'audiostretchpitch',
  'avcodec',
  'avfilter',
  'avformat',
  'avnetwork',
  'avpipeline',
  'avplayer',
  'avprotocol',
  'avrender',
  'avtranscoder',
  'avutil',
  'cheap',
  'common',
  'videoscale'
]

packages.forEach((package) => {
    const sourceFolder = path.resolve(__dirname, `../ikgplayer/template/${package}`);
    const targetFolder = path.resolve(__dirname, `../src/${package}`);

    copyFolderRecursiveSync(sourceFolder, targetFolder);
})
