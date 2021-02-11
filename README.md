# AngularBddApp

This project was generated with Angular CLI version 11.1.3.
This project creates BDD tests for Angular application

Running locally
To install Angular on your local system, you need the following:
Node.js
For more information on installing Node.js, see nodejs.org
Angular, the Angular CLI, and Angular applications depend on npm packages (https://docs.npmjs.com/about-npm) for many features and functions. To download and install npm packages, you need an npm package manager. This guide uses the npm client (https://docs.npmjs.com/cli/v6/commands/npm-install) command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run npm -v in a terminal window.
Make sure the Angular CLI is installed globally:
npm install -g @angular/cli
Install the dependencies:
npm install
Run a local dev server:
ng serve
Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Running BDD tests
Install cucumber:
npm install cucumber -D
Install Selenium Webdriver to automate tests in browser:
npm install -D selenium-webdriver
Install the device drivers for the browser used for automated testing. Refer to https://www.npmjs.com/package/selenium-webdriver for more information.
Make sure you start the web application first (Run ng serve for a dev server. Navigate to http://localhost:4200/) and then run the test:
Execute this command From the application folder:
./node_modules/.bin/cucumber-js ./features/products-list.feature

Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI Overview and Command Reference page.
