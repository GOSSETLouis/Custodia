# Cahier des charges - Projet _HelloTrack_

## Objectif

HelloTrack permet de résoudre un problème que peut rencontrer la police française : le suivi de l'entretien,
la disponibilité et l'état de sa flotte de véhicules.

## Spécifications Techniques

### Technologies utilisées

- #### Global

  - Docker

- #### Front-end

  - React v18
  - Vite

- #### Back-end

  - NestJS v9
  - Mikro-ORM 5
  - Postgres v15
  - Redis

### Plateformes Prises en Charge

- Desktop

## Fonctionnalités

### Application
- Se connecter
- Choisir son service
- Lister les véhicules
- Trier la liste des véhicules
- Gestion de l'entretien (controle technique, vidange, réparation, ...)

### Administration
- Gestion des catégories de véhicules
- Gestion des types d'essence
- Gestion des véhicules


## Interface Utilisateur

TODO Insérer les maquettes quand elles sont réalisées, à chaque sprint

## Architecture

- Architecture monolithique : le front-end et le back-end de l'application sont regroupés dans le même projet.

## Base de Données

- [Insérer l'UML ici]

## Sécurité

- Authentification sécurisée, avec Provider (google, gitlab interne, ...)

## Tests

- [TODO Description des tests à effectuer]

## Calendrier
### Sprint 1 - Administration et CRUD : _12/10/2023 - ???_ 


- #### Maquette du panel admin

- #### Créer l'écran d'administration, et la gestion du CRUD

- #### Créer les entités

- #### Avoir les routes pour le CRUD de ces entités

### Sprint 2 - Maquette puis liste des véhicules et filtres : _??? - ???_

- #### Maquette de sprint 2 et 3

- #### Route pour la récupération des véhicules

- #### Ecran pour lister les véhicules (et détails)

- #### Filtres (back)

### Sprint 3 - Authentification & filtres : _??? - ???_

- #### S'occuper du déploiement

- #### Authentification avec providers

- #### Filtres (front)

### Sprint 4 - Gestion des services : _??? - ???_


## Equipe

| Identité      | Rôle                                                       | Contact                |
|---------------|------------------------------------------------------------|------------------------|
| BETSCH Victor | Scrum Master / Développeur front                           | victor.betsch@ynov.com |
| DUPUY Tom     | Product Owner / Développeur back                           | tom.dupuy@ynov.com     |
| GOSSET Louis  | Référent DevSecOps / Référent Technique / Développeur back | louis.gosset@ynov.com  |
| UZEL Theo     | Référent UX/UI  / Développeur front                        | theo.uzel@ynov.com     |

## Révisions

| Version | Description                    |
|---------|--------------------------------|
| 1.0     | Création du cahier des charges |
