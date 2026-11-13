# Carte professionnelle numérique — ESMEL AMARY JEAN-YVES

Ce dossier contient un site statique 100 % prêt pour GitHub Pages. Aucun abonnement, framework, compte de service tiers ou serveur n'est nécessaire.

## Fichiers à garder ensemble

- `index.html` : page de la carte professionnelle.
- `styles.css` : design responsive.
- `script.js` : partage natif du lien, avec copie de secours.
- `contact.vcf` : fiche contact à importer sur iPhone/Android.
- `assets/portrait.webp` : portrait professionnel.
- `assets/logo.webp` : logo OMNELL.
- `assets/favicon.svg` : petite icône de l'onglet.

## Publier gratuitement, sans ligne de commande

1. Créez un compte sur https://github.com si vous n'en avez pas.
2. Cliquez sur **New repository**.
3. Donnez-lui le nom exact `<votre-identifiant-github>.github.io` (remplacez le texte entre chevrons par votre pseudo GitHub). Pour utiliser un autre nom de dépôt, vous aurez une URL `https://<pseudo>.github.io/<nom-du-depot>/` : cela fonctionne également avec les fichiers fournis.
4. Choisissez **Public** (nécessaire sur GitHub Free) et créez le dépôt.
5. Cliquez sur **Add file → Upload files**. Décompressez le ZIP et ajoutez **le contenu du dossier** à la racine du dépôt. Si le navigateur ne conserve pas le dossier `assets`, créez-le puis ajoutez-y les 3 éléments manuellement. N'envoyez pas le ZIP seul : il faut les fichiers individuels.
6. Validez avec **Commit changes**.
7. Allez dans **Settings → Pages → Build and deployment**. Choisissez **Deploy from a branch**, la branche **main**, dossier **/(root)**, puis **Save**.
8. Ouvrez `https://<votre-identifiant-github>.github.io/` (ou cliquez sur **Visit site**). Une petite attente de publication est possible.
9. Vérifiez les boutons Appeler, WhatsApp, E-mail, LinkedIn et Enregistrer mon contact sur un vrai smartphone.

Le lien **Partager** utilise le lien de la page active. La publication sur GitHub Pages apporte HTTPS, nécessaire à la copie du lien sur la plupart des navigateurs.

## QR code définitif

Après publication, créez un QR code **statique** qui pointe vers l'URL publique de votre page, par exemple sur https://www.qrcode-monkey.com/. Téléchargez un SVG ou PNG haute résolution, et testez-le sur deux téléphones avant impression. Le QR code reste valable tant que l'URL de la page reste inchangée. Changer le contenu du site ne change pas son URL.

## Personnalisation

- Textes et liens : `index.html`.
- Teintes, dimensions et espacements : `styles.css`.
- Photo et logo : remplacez les fichiers WebP en conservant les noms ou mettez à jour les chemins dans `index.html`.
- Coordonnées du répertoire : `contact.vcf` (mettre à jour le fichier si vous changez de téléphone ou d'e-mail dans la page).

> Attention : le dépôt et les informations de contact sont publics. Ne mettez pas de données personnelles que vous ne souhaitez pas publier.

## Vérifications préalables

La structure du site, ses liens de contact, ses images et son fichier VCF ont été vérifiés avant livraison. Testez impérativement les actions sur un iPhone et un Android une fois la page publiée.
