# 📚 Guide GitHub pour AutoVente

## Étape 1 : Créer un compte GitHub (si ce n'est pas déjà fait)
1. Allez sur https://github.com
2. Cliquez sur "Sign up"
3. Suivez les instructions pour créer votre compte

## Étape 2 : Créer un nouveau dépôt sur GitHub
1. Connectez-vous à GitHub
2. Cliquez sur le bouton "+" en haut à droite
3. Sélectionnez "New repository"
4. Remplissez les informations :
   - Repository name : `autovente`
   - Description : "Site de vente de voitures en HTML, CSS et JavaScript"
   - Public ou Private (votre choix)
   - **NE COCHEZ PAS** "Initialize this repository with a README"
5. Cliquez sur "Create repository"

## Étape 3 : Installer Git sur votre ordinateur

### Windows
1. Téléchargez Git depuis https://git-scm.com/download/win
2. Installez avec les options par défaut

### Mac
```bash
# Installer avec Homebrew
brew install git

# Ou télécharger depuis
https://git-scm.com/download/mac
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git
```

## Étape 4 : Configurer Git (première fois seulement)
Ouvrez un terminal/invite de commandes et tapez :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

## Étape 5 : Initialiser et publier votre projet

### Option A : En ligne de commande (Recommandé)

1. Ouvrez un terminal dans le dossier de votre projet :
```bash
cd chemin/vers/votre/projet
```

2. Initialisez Git :
```bash
git init
```

3. Ajoutez tous les fichiers :
```bash
git add .
```

4. Créez votre premier commit :
```bash
git commit -m "Initial commit - Site de vente de voitures"
```

5. Ajoutez le dépôt distant (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub) :
```bash
git remote add origin https://github.com/VOTRE_USERNAME/autovente.git
```

6. Poussez vos fichiers vers GitHub :
```bash
git branch -M main
git push -u origin main
```

### Option B : Avec GitHub Desktop (Plus simple pour les débutants)

1. Téléchargez GitHub Desktop : https://desktop.github.com/
2. Installez et connectez-vous avec votre compte GitHub
3. Cliquez sur "File" > "Add Local Repository"
4. Sélectionnez le dossier de votre projet
5. Cliquez sur "Publish repository"

## 🔄 Workflow de Développement

### Chaque fois que vous modifiez votre code :

1. **Vérifier les changements** :
```bash
git status
```

2. **Ajouter les fichiers modifiés** :
```bash
# Ajouter tous les fichiers
git add .

# Ou ajouter des fichiers spécifiques
git add index.html style.css
```

3. **Créer un commit avec un message descriptif** :
```bash
git commit -m "Description de vos modifications"
```

4. **Envoyer vers GitHub** :
```bash
git push
```

### Exemples de messages de commit :
- `git commit -m "Ajout du système de filtrage par prix"`
- `git commit -m "Correction du bug d'affichage mobile"`
- `git commit -m "Amélioration du design de la navigation"`
- `git commit -m "Ajout de nouvelles voitures au catalogue"`

## 🌿 Travailler avec des Branches

### Créer une nouvelle branche pour une fonctionnalité :
```bash
# Créer et basculer sur une nouvelle branche
git checkout -b nouvelle-fonctionnalite

# Faire vos modifications...
git add .
git commit -m "Implémentation de la nouvelle fonctionnalité"

# Envoyer la branche vers GitHub
git push -u origin nouvelle-fonctionnalite
```

### Fusionner une branche :
```bash
# Retourner sur la branche main
git checkout main

# Fusionner la branche
git merge nouvelle-fonctionnalite

# Envoyer vers GitHub
git push
```

## 🔍 Commandes Git Utiles

```bash
# Voir l'historique des commits
git log

# Voir les modifications non commitées
git diff

# Annuler les modifications d'un fichier
git checkout -- nom_fichier.html

# Récupérer les dernières modifications depuis GitHub
git pull

# Cloner votre projet sur un autre ordinateur
git clone https://github.com/VOTRE_USERNAME/autovente.git
```

## 🚀 Déployer votre site (Bonus)

### GitHub Pages (Gratuit et simple)

1. Sur GitHub, allez dans votre dépôt
2. Cliquez sur "Settings"
3. Dans le menu de gauche, cliquez sur "Pages"
4. Sous "Source", sélectionnez "main" branch
5. Cliquez sur "Save"
6. Votre site sera accessible à : `https://VOTRE_USERNAME.github.io/autovente/`

## 📋 Checklist de Publication

- [ ] Compte GitHub créé
- [ ] Git installé sur l'ordinateur
- [ ] Git configuré (nom et email)
- [ ] Dépôt créé sur GitHub
- [ ] Projet initialisé avec Git
- [ ] Premier commit effectué
- [ ] Code poussé vers GitHub
- [ ] README.md renseigné
- [ ] .gitignore configuré

## 💡 Bonnes Pratiques

1. **Commits fréquents** : Faites des commits régulièrement avec des messages clairs
2. **Messages descriptifs** : Expliquez ce que vous avez changé et pourquoi
3. **Branches pour nouvelles fonctionnalités** : Ne travaillez pas directement sur main
4. **README à jour** : Gardez votre documentation à jour
5. **Tests avant push** : Vérifiez que tout fonctionne avant d'envoyer sur GitHub

## 🆘 Problèmes Courants

### "Permission denied" lors du push
Solution : Configurez une clé SSH ou utilisez un token d'accès personnel

### Conflits de fusion
Solution : 
```bash
git pull
# Résolvez les conflits manuellement dans les fichiers
git add .
git commit -m "Résolution des conflits"
git push
```

### Annuler le dernier commit
```bash
git reset --soft HEAD~1
```

## 📞 Ressources Supplémentaires

- Documentation Git officielle : https://git-scm.com/doc
- Guide GitHub : https://guides.github.com/
- Aide GitHub : https://docs.github.com/

---

Bon développement ! 🚀
