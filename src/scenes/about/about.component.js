import angular from 'angular';
const MODULE_NAME = 'scenes';

angular
  .module(MODULE_NAME)
  .component('about', {
    template: require('./about.tpl.html')
  });