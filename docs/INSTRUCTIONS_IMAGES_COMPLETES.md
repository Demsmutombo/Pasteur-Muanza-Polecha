# Instructions pour Afficher TOUTES les Images

## Nombre d'images dans chaque dossier :
- **Cimetière** : 113 images
- **Morgue** : 82 images  
- **Image du Pasteur** : 10 images (déjà toutes incluses ✅)

## Solution Recommandée

Vu le très grand nombre d'images (195 images au total pour les galeries), il y a deux options :

### Option 1 : Chargement Dynamique (Recommandé)
Créer une fonction qui charge les images dynamiquement depuis le serveur. Cela nécessite une API backend.

### Option 2 : Tableaux Complets
Ajouter manuellement toutes les 113 + 82 = 195 images dans les tableaux JavaScript.

**⚠️ Avertissement Performance** : Avoir 195 images dans le code JavaScript rendra le fichier très lourd et peut ralentir le chargement initial de la page.

### Option 3 : Utiliser un nombre raisonnable (Compromis)
Utiliser environ 50-60 images de chaque catégorie pour un bon équilibre entre complétude et performance.

## Commandes pour Générer les Listes Complètes

```powershell
# Pour cimetiere
$files = Get-ChildItem "assets\img\portfolio\cimetiere" -Filter *.jpeg | Sort-Object Name
$files | ForEach-Object { "        '/assets/img/portfolio/cimetiere/$($_.Name)'," }

# Pour morgue
$files = Get-ChildItem "assets\img\portfolio\morgue" -Filter *.jpeg | Sort-Object Name
$files | ForEach-Object { "        '/assets/img/portfolio/morgue/$($_.Name)'," }
```

## État Actuel
- ✅ Images du Pasteur : 10/10 (toutes incluses)
- ⚠️ Images du Cimetière : 30/113 (partiellement incluses)
- ⚠️ Images de la Morgue : 17/82 (partiellement incluses)
