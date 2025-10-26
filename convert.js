const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const gamesFilePath = path.resolve("./games/games.js");
const imagesDir = path.resolve("./games/images");

// Legge games.js
let fileContent = fs.readFileSync(gamesFilePath, "utf-8");

const gamesArrayMatch = fileContent.match(/const games\s*=\s*(\[[\s\S]*?\]);/);
if (!gamesArrayMatch) {
  console.error("❌ Impossibile trovare l'array 'games' nel file.");
  process.exit(1);
}

const gamesArrayText = gamesArrayMatch[1];
const games = eval(gamesArrayText);

// Funzione per convertire qualsiasi immagine in WebP
function convertToWebp(oldPath, newPath) {
  return new Promise((resolve, reject) => {
    const cmd = `ffmpeg -y -i "${oldPath}" -vcodec libwebp -filter:v "fps=15,scale=trunc(iw/2)*2:trunc(ih/2)*2" -lossless 0 -loop 0 -preset default -an -fps_mode vfr "${newPath}"`;
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(stderr || err);
      else resolve();
    });
  });
}

async function convertImages() {
  for (const game of games) {
    const imagePath = game.image.replace("./games/images/", "");
    const oldPath = path.join(imagesDir, imagePath);
    const ext = path.extname(oldPath).toLowerCase();

    if (!fs.existsSync(oldPath)) {
      console.warn(`⚠️ File non trovato: ${oldPath}`);
      continue;
    }

    // Salta i file già WebP
    if (ext === ".webp") {
      console.log(`⚪ Skip già webp: ${imagePath}`);
      continue;
    }

    const baseName = path.basename(oldPath, ext);
    const newPath = path.join(imagesDir, `${baseName}.webp`);

    try {
      await convertToWebp(oldPath, newPath);
      console.log(`✅ Convertito: ${imagePath} → ${baseName}.webp`);
      game.image = `./games/images/${baseName}.webp`;
    } catch (err) {
      console.error(`❌ Errore convertendo ${oldPath}:`, err);
    }
  }

  // Scrive di nuovo games.js aggiornato
  const newGamesText =
    "const games = " + JSON.stringify(games, null, 2) + ";\n\nmodule.exports = games;\n";

  fs.writeFileSync(gamesFilePath, newGamesText, "utf-8");
  console.log("\n✨ Conversione completata e file aggiornato!");
}

convertImages();
