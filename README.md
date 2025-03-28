# CI/CD Pipeline

Ce projet utilise un pipeline d'intégration continue et de déploiement continu (CI/CD) avec **GitHub Actions**. Ce pipeline est conçu pour automatiser les étapes suivantes à chaque modification de la branche principale (`main`) ou lors de la soumission de pull requests :

1. **Récupération des sources**
2. **Configuration de Node.js**
3. **Installation des dépendances**
4. **Exécution des tests unitaires**
5. **Archivage des artefacts** (génération d'une archive compressée)
6. **Téléchargement des artefacts** (upload d'une archive contenant les fichiers du projet)

## Déclenchement du pipeline

Le pipeline est déclenché par les événements suivants :

- **Push** sur la branche `main`.
- **Pull Request** vers la branche `main`.

## Étapes du pipeline

Le pipeline est composé de plusieurs étapes clés, décrites ci-dessous :

### 1. Récupération des sources
Cette étape utilise l'action `actions/checkout@v3` pour récupérer les sources du projet depuis le dépôt GitHub. Cela permet de s'assurer que les dernières modifications du code sont prises en compte à chaque exécution du pipeline.

```yaml
- name: 👅 Récupération des sources
  uses: actions/checkout@v3
```

### 2. Configuration de Node.js
L'étape suivante configure l'environnement Node.js avec la version spécifiée (ici la version `18`), en utilisant l'action `actions/setup-node@v3`. Cette configuration est nécessaire pour installer et exécuter les dépendances du projet.

```yaml
- name: 🛠️ Configuration de Node.js
  uses: actions/setup-node@v3
  with:
    node-version: 18
```

### 3. Installation des dépendances
Cette étape exécute la commande `npm install` pour installer toutes les dépendances du projet à partir du fichier `package.json`.

```yaml
- name: 🌟 Installation des dépendances
  run: npm install
```

### 4. Exécution des tests unitaires
Les tests unitaires sont exécutés à l'aide de la commande `npm test`. Cela permet de vérifier que le code fonctionne comme prévu avant de passer à la suite du pipeline.

```yaml
- name: ✅ Exécution des tests unitaires
  run: npm test
```

### 5. Archivage des artefacts
Une fois les tests réussis, cette étape crée une archive `.zip` du projet, excluant les répertoires et fichiers inutiles (par exemple, `.git`, `node_modules`, et `tests`). Cela permet de stocker l'artefact du build pour une utilisation ultérieure.

```yaml
- name: 💎 Archivage des artefacts
  run: zip -r release.zip . -x "*.git/*" "*.node_modules/*" "*.tests/*"
```

### 6. Upload des artefacts
Enfin, cette étape télécharge l'artefact (le fichier `.zip` contenant les sources du projet) en utilisant l'action `actions/upload-artifact@v4`. L'artefact sera disponible pour être téléchargé ou utilisé dans des étapes ultérieures.

```yaml
- name: 🛢️ Upload des artefacts
  uses: actions/upload-artifact@v4
  with:
    name: build-artifact
    path: release.zip
```

## Consulter les artefacts téléchargés

Une fois que le pipeline est exécuté, tu peux télécharger les artefacts créés en suivant ces étapes :

1. Va dans l'onglet **"Actions"** de ton dépôt sur GitHub.
2. Sélectionne l'exécution du workflow correspondante.
3. Sous l'exécution, tu verras une section intitulée **"Artifacts"**.
4. Clique sur le lien pour télécharger l'artefact, qui sera un fichier `.zip` contenant les fichiers nécessaires.

## Conclusion

Ce pipeline CI/CD permet d'automatiser l'intégration et la livraison de ton projet. Grâce à GitHub Actions, il est facile de configurer des étapes de build, de tests et de déploiement tout en garantissant que ton code est validé à chaque modification.