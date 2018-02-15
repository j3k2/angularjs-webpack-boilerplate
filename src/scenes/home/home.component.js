import angular from 'angular';
const MODULE_NAME = 'scenes';

angular
  .module(MODULE_NAME)
  .component('home', {
    template: require('./home.tpl.html')
  });