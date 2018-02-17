import angular from 'angular';
import config from './config/global.config';

import pages from './pages/pages.module';
import globalComponents from './components/global-components.module';

import '@uirouter/angularjs';
import 'angular-local-storage';

angular
  .module(config.appName, [
    pages,
    globalComponents,
    'ui.router',
    'LocalStorageModule'
  ])
  .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
    Object.keys(config.stateUrls).forEach(stateKey => {
      $stateProvider.state({
        name: stateKey,
        component: stateKey,
        url: config.stateUrls[stateKey]
      });
    });

    $locationProvider.html5Mode(true);
  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, [config.appName], { strictDi: true });
});
