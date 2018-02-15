import angular from 'angular';
import '@uirouter/angularjs';
const APP_NAME = 'app';

import './scenes/scenes.module.js';
import './components/components.module.js';

angular
  .module(APP_NAME, ['ui.router', 'scenes', 'components'])
  .config(function($stateProvider, $locationProvider) {
    var homeState = {
      name: 'home',
      url: '/',
      component: 'home'
    };
  
    var aboutState = {
      name: 'about',
      url: '/about',
      component: 'about'
    };
  
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);

    $locationProvider.html5Mode(true);
  });

  angular.element(document).ready(() => {
    angular.bootstrap(document, [APP_NAME]);
  });