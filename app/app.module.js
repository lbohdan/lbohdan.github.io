import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngDialog from 'ng-dialog';

import Common from './common';
import Components from './components';
import AppComponent from './app.component';
import 'normalize.css';

const app = angular
  .module('app', [
    Components,
    Common,
    uiRouter,
    ngDialog
  ])
  .component('app', AppComponent)
  .name;

export default app;
