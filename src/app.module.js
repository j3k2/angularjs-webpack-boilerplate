import angular from 'angular';
import '@uirouter/angularjs';
import config from './config/config.module.js';

// scenes and global components
import scenes from './scenes/scenes.module.js';
import navigation from './components/navigation/navigation.component.js';

angular
  .module(config.modules.app, [
    'ui.router',
    scenes,
    navigation
  ])
  .config(function($stateProvider, $locationProvider) {
    var homeState = {
      name: 'home',
      url: '/',
      component: 'home'
    };
  
    var usersState = {
      name: 'users',
      url: '/users',
      component: 'users'
    };
  
    $stateProvider.state(homeState);
    $stateProvider.state(usersState);

    $locationProvider.html5Mode(true);
  });

  angular.element(document).ready(() => {
    angular.bootstrap(document, [config.modules.app]);
  });