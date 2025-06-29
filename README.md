# Heliantys Kiosk

Heliantys est une application moderne de kiosque basée sur Electron, conçue pour des écrans tactiles interactifs ou des terminaux dédiés. Elle est destinée à être déployée sur des appareils Linux dans des environnements publics ou semi-publics, offrant une expérience utilisateur fluide et sécurisée.

---

## 🚀 Fonctionnalités

- **Mode Kiosque** : Fonctionne en mode plein écran verrouillé pour une utilisation publique.
- **Mode Test/Développement** : Développement local facilité avec rechargement automatique.
- **Interface tactile** : Optimisée pour les écrans en mode portrait (768x1024).
- **Données dynamiques** : Charge les produits et recettes à partir de fichiers JSON locaux.
- **Personnalisation** : Logo et ressources personnalisables.

---

## 🖥️ Installation (Linux)

### 1. Prérequis
- [Node.js](https://nodejs.org/) (v18+ recommandé)
- [npm](https://www.npmjs.com/) (inclus avec Node.js)
- [Electron](https://www.electronjs.org/) (installé via npm)

### 2. Téléchargement
Clonez ce dépôt :
```bash
git clone https://github.com/your-org/heliantys-kiosk.git
cd heliantys-kiosk
```

### 3. Installation des dépendances
```bash
npm install
```

---

## 🏁 Utilisation

### Mode Kiosque (Production)
Pour lancer l'application en mode kiosque (plein écran, verrouillé) :

1. **Modifiez `src/main.js`** : Mettez `kiosk: true` et `fullscreen: true` dans les options de `BrowserWindow` si ce n'est pas déjà fait.
2. **Démarrez l'application :**
   ```bash
   npm start
   ```


### Mode Test/Développement
Pour lancer l'application en mode développement (fenêtré, avec rechargement automatique lors des modifications du code) :

```bash
npm run dev
```

Cela ouvrira l'application dans une fenêtre redimensionnable, avec rechargement automatique à chaque modification du code pour un développement rapide.

---

## 📁 Structure du projet

```
heliantys-kiosk/
├── data/            # Fichiers de données JSON (produits.json, recettes.json)
├── public/          # Ressources statiques et points d'entrée HTML
│   ├── assets/      # Images, logos, etc.
│   └── ...
├── src/             # Processus principal et rendus Electron
│   ├── main.js      # Processus principal Electron (point d'entrée)
│   ├── preload.js   # Scripts de préchargement
│   └── renderer/    # Scripts de rendu pour chaque page
├── package.json     # Métadonnées et scripts du projet
└── README.md        # Ce fichier
```

---

## 🛠️ Personnalisation
- **Logo** : Remplacez `public/assets/heliantys-logo.png` par le logo adapté.
- **Données** : Modifiez `data/produits.json` et `data/recettes.json` pour changer le contenu affiché.
- **Interface** : Modifiez le HTML/CSS dans `public/` et le JS dans `src/renderer/` pour personnaliser les pages.


