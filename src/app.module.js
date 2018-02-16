import angular from 'angular';
import '@uirouter/angularjs';
import config from './config/global.config';

// pages and global components
import pages from './pages/pages.module';
import navigation from './components/navigation/navigation.component';

angular
  .module(config.modules.app, [
    'ui.router',
    pages,
    navigation,
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
  angular.bootstrap(document, [config.modules.app], {strictDi: true});
});
