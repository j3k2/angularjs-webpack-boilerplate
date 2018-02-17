import angular from 'angular';
import config from './config/global.config';

import pages from './pages/pages.module';
import globalComponents from './components/global-components.module';

// external libs
import '@uirouter/angularjs';
import 'angular-local-storage';

angular
  .module(config.appName, [
    'ui.router',
    'LocalStorageModule',
    pages,
    globalComponents
  ])
  .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
    const homeState = {
      name: 'home',
      url: '/',
      component: 'home',
    };

    const usersState = {
      name: 'users',
      url: '/users',
      component: 'users',
    };

    $stateProvider.state(homeState);
    $stateProvider.state(usersState);

    $locationProvider.html5Mode(true);
  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, [config.appName], { strictDi: true });
});
