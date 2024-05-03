# WorldDev App

Bienvenue dans WorldDev pour la création d'une mini-application de mise en relation entre les développeurs et des entreprises ou d'autres personnes. Cela consiste à permettre aux développeurs de faire valoir leurs compétences facilement, et des personnes intéressées pourront entrer en contact avec eux pour plus de collaborations grâce à un abonnement sur la plateforme ; il y a bien d'autres choses qui suivront.  Cette application
va nous permettre d'utiliser :

- `zod`
- `react-hook-form`
- `next`
- `next-auth`
- `next-themes`
- `prisma`

## Pré-requis

- [TypeScrite à connaître pour commencer Next](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Les bases de Next js](https://nextjs.org/docs)
- [Les bases de Next auth](https://nextjs.org/docs)
- Installer le React DevTools
  - [chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Systems

- [git](https://git-scm.com/downloads) - v2 ou plus
- [node](https://nodejs.org/en/) - v12 ou plus
- [npm](https://nodejs.org/en/) - v6 ou plus


#### Vérifier les versions

```bash
git --version
node --version
npm --version

```

Je vais utiliser `npm` durant tous le cours

## Setup du projet

```bash
git clone https://github.com/perrin1/World-Dev.git
cd World-Dev
npm install
```

## Setup de la database

J'utililise [prisma](https://www.prisma.io/) pour la gestion de la database.

Elle est utiliser avec [sqlite](https://www.sqlite.org/index.html) pour la simplicité
de l'installation. (c'est un database dans un fichier, donc rien besoin d'installer)

Pour setup la database tu peux lancer :

```bash
npm prisma:setup
```

## Lancer le projet

```bash
npm dev
```

## Construction 

En NextJS le routing est basée sur la structure de fichier qui est dans le dossier `pages`.
Je tiens à préciser qu'on est sur `NextJS version 14.....`.

Cette version, hybrid, va nous permettre de faire NextJS avec le `app` directory que tu découvriras . moi j'ai préfére le src


## pour ce qui manque  :

- j'ai dû omettre la récupération des données au départ,
- les données d'affichage et je n'ai pas fait la recherche des données
- J'ai également dû supprimer le paiement :)


Je vous laisse prendre le prototype pour en faire ce que vous voulez 📖
