import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngDialog from 'ng-dialog';

import Common from './common';
import Components from './components';
import AppComponent from './app.component';
import {API} from './app.constants';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ng-dialog/css/ngDialog-theme-default.min.css';
import 'ng-dialog/css/ngDialog.min.css';

const app = angular
  .module('app', [
    Components,
    Common,
    uiRouter,
    ngDialog
  ])
  .component('app', AppComponent)
  .constant('API', API)
  .name;

export default app;
