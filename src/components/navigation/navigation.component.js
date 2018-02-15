import angular from 'angular';
const MODULE_NAME = 'components';

angular
  .module(MODULE_NAME)
  .component('navigation', {
    template: require('./navigation.tpl.html')
  });