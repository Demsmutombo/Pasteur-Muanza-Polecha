# Guide Complet - Organisation des Images pour le Site Mémorial

## 📁 Structure des Dossiers d'Images

```
assets/img/
├── log.png, logo.jpeg (logos du site)
└── portfolio/
    ├── cimetiere/ (82 images .jpeg)
    ├── morgue/ (17 images .jpeg)  
    ├── VEILLER/ (86 images .jpeg)
    └── image du pasteur/ (9 images .jpeg)
```

## 🎯 Répartition des Images par Section du Site

### 1. HERO SECTION (Image de fond principale)
- **Fichier actuel:** `IMG_20240915_050452_231.jpg` (n'existe pas)
- **À utiliser:** Une image depuis `portfolio/image du pasteur/`
- **Suggestion:** `WhatsApp Image 2025-12-28 at 21.55.56.jpeg` ou `WhatsApp Image 2026-01-11 at 13.29.43.jpeg`
- **Chemin:** `/assets/img/portfolio/image du pasteur/WhatsApp Image 2025-12-28 at 21.55.56.jpeg`

### 2. ABOUT SECTION (Photo dans la biographie)
- **Fichier actuel:** `FB_IMG_1726419737492.jpg` (n'existe pas)
- **À utiliser:** Une photo depuis `portfolio/image du pasteur/`
- **Suggestion:** `WhatsApp Image 2025-12-28 at 21.55.57.jpeg`
- **Chemin:** `/assets/img/portfolio/image du pasteur/WhatsApp Image 2025-12-28 at 21.55.57.jpeg`

### 3. SERVICES SECTION (Vignettes vidéo)

#### 3.1 Veillée Mortuaire
- **Fichier actuel:** `portfolio/Capture.PNG` (peut ne pas exister)
- **À utiliser:** Une image depuis `portfolio/VEILLER/`
- **Suggestion:** `WhatsApp Image 2026-01-11 at 13.28.28.jpeg`
- **Chemin:** `/assets/img/portfolio/VEILLER/WhatsApp Image 2026-01-11 at 13.28.28.jpeg`

#### 3.2 Morgue  
- **Fichier actuel:** `portfolio/morgue/IMG-20240919-WA0091.jpg` (n'existe pas, extension différente)
- **À utiliser:** Une image depuis `portfolio/morgue/`
- **Suggestion:** `WhatsApp Image 2026-01-11 at 13.29.33.jpeg`
- **Chemin:** `/assets/img/portfolio/morgue/WhatsApp Image 2026-01-11 at 13.29.33.jpeg`

#### 3.3 Cimetière
- **Fichier actuel:** `portfolio/cimetiere/IMG-20240919-WA0024.jpg` (n'existe pas, extension différente)
- **À utiliser:** Une image depuis `portfolio/cimetiere/`
- **Suggestion:** `WhatsApp Image 2026-01-11 at 13.29.31.jpeg`
- **Chemin:** `/assets/img/portfolio/cimetiere/WhatsApp Image 2026-01-11 at 13.29.31.jpeg`

### 4. PORTFOLIO GALLERY (Galerie de photos)

#### 4.1 Images du Cimetière
- **Dossier:** `portfolio/cimetiere/`
- **Nombre:** Sélectionner environ 20-30 images parmi les 82 disponibles
- **Toutes les images disponibles sont listées dans:** `liste_cimetiere.txt`

#### 4.2 Images de la Morgue
- **Dossier:** `portfolio/morgue/`
- **Nombre:** Toutes les 17 images disponibles
- **Toutes les images disponibles sont listées dans:** `liste_morgue.txt`

### 5. CARROUSEL - Photos du Pasteur
- **Dossier:** `portfolio/image du pasteur/`
- **Nombre:** Toutes les 9 images disponibles
- **Images:**
  1. WhatsApp Image 2025-12-28 at 21.55.56.jpeg
  2. WhatsApp Image 2025-12-28 at 21.55.57 (1).jpeg
  3. WhatsApp Image 2025-12-28 at 21.55.57 (2).jpeg
  4. WhatsApp Image 2025-12-28 at 21.55.57.jpeg
  5. WhatsApp Image 2025-12-28 at 21.55.58.jpeg
  6. WhatsApp Image 2025-12-28 at 21.56.02.jpeg
  7. WhatsApp Image 2025-12-28 at 21.56.04.jpeg
  8. WhatsApp Image 2025-12-28 at 21.56.06.jpeg
  9. WhatsApp Image 2026-01-11 at 13.29.43.jpeg

### 6. SECTION STATS (Compteur de jours)
- **Fichier actuel:** `FB_IMG_1726419798066.jpg` (n'existe pas)
- **À utiliser:** Une image depuis `portfolio/image du pasteur/`
- **Suggestion:** `WhatsApp Image 2025-12-28 at 21.56.06.jpeg`
- **Chemin:** `/assets/img/portfolio/image du pasteur/WhatsApp Image 2025-12-28 at 21.56.06.jpeg`

### 7. SECTION TESTIMONIALS (Fond du carrousel)
- **Fichier actuel:** `IMG_20240915_050829_873.jpg` (n'existe pas)
- **À utiliser:** Une image depuis `portfolio/image du pasteur/`
- **Suggestion:** `WhatsApp Image 2025-12-28 at 21.56.04.jpeg`

### 8. SECTION HOMMAGE
- **Fichier actuel:** `portfolio/IMG-20240919-WA0108.jpg` (n'existe pas)
- **À utiliser:** Une belle image depuis `portfolio/image du pasteur/`
- **Suggestion:** `WhatsApp Image 2026-01-11 at 13.29.43.jpeg`

### 9. CARTE MÉMORIAL
- **Fichier actuel:** `FB_IMG_1726419737492.jpg` (n'existe pas)
- **À utiliser:** La meilleure photo portrait depuis `portfolio/image du pasteur/`
- **Suggestion:** `WhatsApp Image 2025-12-28 at 21.55.57.jpeg`

## ⚠️ Notes Importantes

1. **Extensions:** Tous les fichiers sont en `.jpeg`, pas `.jpg`
2. **Espaces dans les noms:** Les noms de fichiers et dossiers contiennent des espaces (ex: "image du pasteur", "WhatsApp Image 2025-12-28 at 21.55.56.jpeg")
3. **Encodage URL:** Les espaces dans les chemins seront automatiquement encodés par le navigateur
4. **Chemins relatifs:** Utiliser `/assets/img/...` pour les chemins absolus depuis la racine

## ✅ Actions à Effectuer

1. ✅ Mettre à jour tous les chemins dans `src/views/Home.vue`
2. ✅ Mettre à jour les chemins dans `src/views/CarteMemorial.vue`
3. ✅ Mettre à jour les chemins dans `src/views/Temoignage.vue`
4. ✅ Vérifier que toutes les images référencées existent
5. ✅ Tester l'affichage de toutes les images

## 📝 Fichiers à Modifier

- `src/views/Home.vue` (lignes 8, 23, 136, 155, 174, 213, 263, 286, 424-455)
- `src/views/CarteMemorial.vue` (ligne 83)
- `src/views/Temoignage.vue` (lignes 8, 23, 51)
