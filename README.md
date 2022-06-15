# Mediateque
estun projet simple permettant d'afficher les films, les CDs et les DVDs dans un médiatèque selon la modalité suivante:
* Le composant product-page servira de composant parent. C'est lui qui contiendra les données des articles. 
* Ce  composant appellera un composant enfant product-list dont la seule tâche sera de générer autant de cartes que nécessaire, en appellant le composant product-card.
* Les composants enfant n'auront AUCUNE logique : ils ne seront chargés que de l'affichage. 
* ProductListComponent est chargé d'afficher le composant ProductCardComponent, qui lui affiche les informations de l'article.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
