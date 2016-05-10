# md-editor

Un éditeur de markdown reposant sur codemirror et permettant une preview (live et/ou action de l'utiisateur, à vous de voir), avec deux panneaux juxtaposés, qui puisse fonctionner en ligne ou en local. Le choix des librairies est à votre libre appréciation.

C'est un travail personnel, qui a pour but, pour vous comme pour nous, de permettre d'évaluer les compètences que vous avez acquis.
Il reste un mois de formation, c'est le moment de mettre à l'épreuve le savoir que  vous avez accumulé avec une mise en application similaire à celle que vous aurez en entreprise.
Il n'est biensûr pas interdit de demander de  l'aide à ses camarades ou aux formateurs, mais uniquement via slack sur un channel dédié, et on ne se refile pas de code, on respecte le temps de ses camarades en faisant le nécessaire en recherches en amont par soi-même et en posant des questions précises avec des  éléments à l'appui (messages d'erreurs, recherches effectuées, page relative dans la doc...). Seuls les formateurs peuvent intervenir de vive voix.

N'hésitez pas également à améliorer ce document via un pull request et à poser des questions via les [issues](https://github.com/SimplonTlse/md-editor/issues)

## Objectifs :

### 1ère étape (3j max)
- Créer un éditeur de markdown avec [CodeMirror 2](http://codemirror.net/2/mode/gfm/index.html) avec preview
- Ajouter une fonctionnalité de prévisualisation
- Sauvegarder les fichiers dans localStorage ([comprendre localStorage - developpez.net](http://debray-jerome.developpez.com/articles/comprendre-le-storage-en-html5/), [doc MDN](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage))
- Déployer sur une github Page

### 2ème étape (2j max)
- Utiliser les [sessions en PHP](http://php.developpez.com/cours/sessions/?page=page_3) pour persister les donnéess côté serveur (en désactivant localStorage)

#### Bonus
- Mode Offline
- Import et export de fichiers Markdown
- No distraction mode
- API & auth avec laravel
- Electron
- Déploiement sur un VPS (smp, perso, heroku...)

## Préparation & modalités
- Validation du trello et du choix des technos/librairies avant de commencer à coder
- Pomodoro et trello obligatoire
- Code sur github (fork de ce repo)

## Evaluation
- code review commentée (facilitez nous la vie, faites de commit clairs en ajoutant les fichiers uniquement lié à la fonctionnalité que vous implémentez)
- organisation du trello

Nous prêterons attention à la qualité de votre code, ainsi qu'à l'organisation autour du projet (clarté des commits, précision des tâches) et attendons du professionalisme de votre part (pas de fonctionnalité farfelu ou inutile, une attention à l'accessibillité et  l'expérience utilisateur, pas de choix esthétiques douteux; communication claire et apaisée avec vos camarades...)

### Have fun !
 

## Lumen PHP Framework

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://poser.pugx.org/laravel/lumen-framework/d/total.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/lumen-framework/v/stable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/lumen-framework/v/unstable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Official Documentation

Documentation for the framework can be found on the [Lumen website](http://lumen.laravel.com/docs).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

### License

The Lumen framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
