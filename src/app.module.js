// import _ from 'lodash';
// import d3 from 'd3';
import angular from 'angular';
import '@uirouter/angularjs';
const APP_NAME = 'app';
import './scenes/scenes.module.js';

angular
  .module(APP_NAME, ['ui.router', 'scenes'])
  .config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/',
      component: 'hello'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      component: 'about'
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });

  angular.element(document).ready(() => {
    angular.bootstrap(document, [APP_NAME]);
  });