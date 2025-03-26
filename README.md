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
