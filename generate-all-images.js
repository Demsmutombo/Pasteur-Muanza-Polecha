// Script Node.js pour générer les tableaux d'images complets
const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'assets', 'img', 'portfolio');

// Fonction pour générer un tableau d'images
function generateImageArray(folderName, arrayName) {
  const folderPath = path.join(basePath, folderName);
  if (!fs.existsSync(folderPath)) {
    console.log(`Dossier ${folderName} n'existe pas`);
    return '';
  }
  
  const files = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.jpeg'))
    .sort();
  
  let result = `      ${arrayName}: [\n`;
  files.forEach((file, index) => {
    const comma = index < files.length - 1 ? ',' : '';
    result += `        '/assets/img/portfolio/${folderName}/${file}'${comma}\n`;
  });
  result += '      ],\n';
  
  return result;
}

// Générer les tableaux
console.log('Génération des tableaux d\'images...\n');

const cimetiere = generateImageArray('cimetiere', 'cimetiereImages');
const morgue = generateImageArray('morgue', 'morgueImages');
const pasteur = generateImageArray('image du pasteur', 'pasteurPhotos');

// Afficher les résultats
console.log('=== CIMETIERE ===');
console.log(cimetiere);
console.log('\n=== MORGUE ===');
console.log(morgue);
console.log('\n=== PASTEUR ===');
console.log(pasteur);

// Écrire dans un fichier
const output = cimetiere + '\n' + morgue + '\n' + pasteur;
fs.writeFileSync('images-code-generated.txt', output, 'utf8');
console.log('\nCode généré dans images-code-generated.txt');
