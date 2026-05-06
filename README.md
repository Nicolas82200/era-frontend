# ERA

## Présentation du projet
Ce projet est un site web fullstack, nous avions pour thèmes un site web pour le passé ou le futur. <br>
Nous avons choisi de concevoir un site orienté **futur**, permettant de voyager à travers différentes époques : de la **Préhistoire**, en passant par le **Moyen Âge**, jusqu’à notre ère... 
**l'époque apocalyptique** <br>
<i>(oui, nous connaissons le futur)</i>

:warning: **Attention : ce repository contient uniquement la partie frontend du projet** <br>
 -> <a href="https://github.com/SoleneMend/Era_backend#"> Voir le repository backend </a>

### Horaires
- Début du projet : `05/05/2026 à 14h30`  <br>
- Fin du projet : `07/05/2026 à 12h30`

## Stack technique
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## Installation

:warning: **Attention : le projet est séparé en deux dossiers (frontend / backend)**
### Front 
```
 --> Cloner le repository
 > Avec clé SSH
git clone git@github.com:Nicolas82200/era-frontend.git

 > Sans clé SSH
git clone https://github.com/Nicolas82200/era-frontend.git

 --> Installer les dépendances
cd era-frontend
npm install
```

### Back
```
 --> Cloner le repository
 > avec clé SSH
git clone git@github.com:SoleneMend/Era_backend.git

 > sans clé SSH
git clone https://github.com/SoleneMend/Era_backend.git

 --> Installer les dépendances
cd era-backend
npm install
```

### Base de donnée
 - Ouvrir le fichier `database.sql`
 - Copier son contenu
 - L’exécuter dans MySQL :
```bash
mysql -u DB_USER -p
```
ou via MySQL Workbench.

### :warning: Important : 
 - Renommer le fichier `.env.sample` en `.env`
 - Modifier : `DB_USER` et `DB_PASSWORD`


## Lancer le projet
:warning: Il est nécessaire de lancer le frontend ET le backend

### Front 
``` bash
npm run dev
```

### Back
``` bash
npm run dev
```


## Base de données
<img src="src\assets\README\Bdd.png">
Base de données réalisée avec MySQL, accessible via le backend.

## API

### GET `/periods`
Retourne toutes les époques :
```json
{
"id":1,
"name":"Phanérozoïque/ Précambrien",
"introduction":"L'origine de la vie",
"description":"Bla bla bla dinosaure ROAAAAR",
"time":{
    "start":"-541 Ma",
    "end":"-300 000"
},
"image":"http://localhost:3310/assets/periods/PP.png",
"image_logo":"http://localhost:3310/assets/periods/logo/piouPP.png","index_name":"index_phanerozoique"
}
```
### GET `/events`
Retourne tous les événements.

### GET `/events/:id`
Retourne les événements d’une époque spécifique
(exemple : `/events/1`)

```json
{
"id":1,
"name":"Formation de la Terre",
"introduction":"Livraison d’une planète. Assemblage encore chaud.",
"description":"Surface instable, ambiance volcanique, zéro mode d’emploi.",
"max_join":20,
"risque_level":1,
"periods":{
    "id":1,
    "name":"Phanérozoïque/ Précambrien"
},
"time":"-4.6 milliards",
"time_trip":"5 jours",
"images":"http://localhost:3310/assets/events/PP/terre.png",
"price":849
}
```

## Communication Backend - Frontend

```ts
 // pour recuperer les données de l API periods
fetch("http://localhost:3310/periods")
	.then((res) => res.json())
	.then((data) => set(data));
```

