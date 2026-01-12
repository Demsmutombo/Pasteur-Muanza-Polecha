# Script pour générer les tableaux d'images
$basePath = "G:\IM\IM DIGITAL LABS\FUNERAILLES\EN ATTENTE\Pasteur Muanza Polecha\assets\img\portfolio"

# Générer pour cimetiere
$files = Get-ChildItem "$basePath\cimetiere" -Filter *.jpeg | Sort-Object Name
$lines = $files | ForEach-Object { "        '/assets/img/portfolio/cimetiere/$($_.Name)'" }
$lines -join ",`n" | Out-File -FilePath "cimetiere_full.txt" -Encoding UTF8

# Générer pour morgue  
$files = Get-ChildItem "$basePath\morgue" -Filter *.jpeg | Sort-Object Name
$lines = $files | ForEach-Object { "        '/assets/img/portfolio/morgue/$($_.Name)'" }
$lines -join ",`n" | Out-File -FilePath "morgue_full.txt" -Encoding UTF8

Write-Host "Fichiers générés!"
