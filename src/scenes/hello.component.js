import angular from 'angular';
const MODULE_NAME = 'scenes';

angular
  .module(MODULE_NAME)
  .component('hello', {
    template: '<div>HELLO THERE</div>'
  });