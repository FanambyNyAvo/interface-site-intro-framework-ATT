# EXAMEN DU QUESTION OUVERTE INTRODUCTION FRAMEWORK ANGULAR
# Interface AT&T — Community Forums Sunset

Projet de conception d'interface d'accueil réalisé en **Angular**, dans le cadre du cours *Introduction aux Frameworks* (L3 GLBD - UPEF).

Reproduction fidèle de la page :
[https://www.att.com/support/how-to/community-forums-sunset](https://www.att.com/support/how-to/community-forums-sunset)

---

##  Objectif du projet

Concevoir, en Angular, l'interface d'accueil d'un site web existant parmi une liste imposée. Le site choisi pour ce projet est la page **"Community Forums Sunset"** d'AT&T.

---

## Stack technique

- **Angular** (dernière version stable, composants **standalone**)
- **SCSS** pur pour le style (aucune librairie UI type Angular Material)
- Architecture en composants réutilisables

---

##  Structure du projet

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   └── components/
│       ├── header/                  → barre du haut + logo + navigation
│       ├── hero-banner/             → bandeau "We're still here for you"
│       ├── help-section/            → section "How can we help you today?"
│       ├── app-promo-card/          → carte réutilisable (myAT&T / Smart Home Manager)
│       ├── promo-cards-container/   → conteneur des 2 cartes promo
│       └── footer/                  → pied de page (liens, réseaux sociaux, mentions légales)
├── styles/
│   └── _variables.scss              → variables SCSS (couleurs, etc.)
└── styles.scss                      → styles globaux

public/
└── assets/
    └── att-logo.svg                 → logo AT&T (extrait du code source original)
```

---

## Choix de conception

- **Pas d'Angular Material** : le style est entièrement custom en SCSS, pour coller au plus près du design réel d'AT&T.
- **Menu de navigation** : uniquement visuel (pas de logique d'ouverture/fermeture des sous-menus).
- **Pas de responsive** : version desktop uniquement, conformément aux consignes du projet.
- **Logo AT&T** : SVG vectoriel extrait directement du code source de la page originale (pas d'image bitmap).
- **Données dynamiques** : les listes (liens d'aide, colonnes du footer, fonctionnalités des cartes promo) sont générées via `*ngFor` à partir de tableaux définis dans les fichiers `.ts`, plutôt qu'écrites en dur dans le HTML.

---

## Lancer le projet

```bash
npm install
ng serve
```

Puis ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

---

## Remarque technique

Ce projet utilise la syntaxe Sass moderne `@use` (plutôt que `@import`, dépréciée) pour l'import des variables SCSS entre fichiers.

---

## 👤 Auteur
 RAKOTOMIHAJA Fanamby Ny Avo — L3 GLBD, UPEF.
