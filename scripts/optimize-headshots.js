const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '../src/data/headshots');
const outputDir = path.join(__dirname, '../src/data/optimized-headshots');

// Ensure output directory exists.
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading headshots directory:', err);
        return;
    }
    files.forEach(file => {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);
        
        // Resize the image and compress it for faster loading.
        sharp(inputPath)
            .resize({ width: 400 }) // adjust width as needed
            .toFormat('webp', { quality: 80 }) // convert/compress
            .toFile(outputPath)
            .then(info => console.log(`Optimized ${file}`))
            .catch(err => console.error(`Error processing ${file}:`, err));
    });
});