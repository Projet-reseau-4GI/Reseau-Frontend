#  Verification Document Identité

## Description du Projet
Cette application Front-end a pour objectif de fournir une interface utilisateur sécurisée et conforme aux normes pour le téléchargement et la vérification de documents d'identité (Recto/Verso). Elle est construite avec Next.js et TypeScript.

##  Démarrage et Installation
1.  **Installation des dépendances :**
    ```bash
    npm install
    ```
2.  **Lancement en mode développement :**
    ```bash
    npm run dev
    ```
    L'application sera accessible sur `http://localhost:3000`.

##  Structure du Projet
La structure respecte les contraintes de lisibilité et de modularité :
src/ ├── app/ │ ├── (landing)/ # Pages d'atterrissage │ ├── api/ # Routes API (Simulation de Back-end) │ ├── verification/ # Page de processus de vérification │ ├── globals.css │ └── layout.tsx # Layout global (gestion de l'erreur globale) ├── components/ │ ├── layout/ # Header, GlobalNotification │ ├── landing/ # Composants de la page d'accueil │ └── verification/ # UploaderComponent, VerificationResultDisplay └── lib/ ├── logService.ts # Service de logging sécurisé └── verificationService.ts # Service d'appel API

##  Respect des Contraintes de la Charte de Développement

| Exigence de la Charte | Statut | Détails de l'Implémentation |
| :--- | :--- | :--- |
| **Nommage (snake_case/PascalCase)** |  OK | Variables en `snake_case`, Composants/Classes/Types en `PascalCase`. |
| **Structure Modulaire** |  OK | Séparation claire des couches (Layout/Landing/Verification) et du Service (`src/lib`). |
| **Sécurité des Logs** |  OK | Utilisation de `logService.ts` pour standardiser et filtrer les logs sensibles en fonction de `NODE_ENV`. |
| **Gestion des Données Sensibles** |  OK | Aucune donnée d'identité (fichiers, résultat) n'est stockée dans le localStorage ou les cookies. |
| **Vérification Recto/Verso** |  OK | Le formulaire (`UploaderComponent`) exige explicitement le recto et le verso avant soumission. |
| **Conformité SEO/SGB** |  OK | Utilisation de Next.js pour l'architecture et les balises `<title>` et `<meta description>` définies dans `layout.tsx`. |