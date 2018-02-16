import angular from 'angular';
import '@uirouter/angularjs';
import config from './config/config.module';

// scenes and global components
import scenes from './scenes/scenes.module';
import navigation from './components/navigation/navigation.component';

angular
  .module(config.modules.app, [
    'ui.router',
    scenes,
    navigation,
  ])
  .config(($stateProvider, $locationProvider) => {
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
  });

angular.element(document).ready(() => {
  angular.bootstrap(document, [config.modules.app]);
});
