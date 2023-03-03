# Frontend

This is the frontend component of a demo fullstack project that consumes the REQRES API (https://reqres.in/). It has the login and register forms, then once authenticated, navigates to list of resources.    

Only predetermined username/password combinations give a successful response from REQRES API. 
An example is {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
} 
The middleware that communicates with REQRES is a Java Spring Boot application. Currently, this app is set up to run against a locally-running Java application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Currently, there is only minimal test coverage

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## TODO

Error handling and default error page
Store Rest API URLs in config file according to run environment
Unit testing, e2e testing
