import angular from 'angular';
const MODULE_NAME = 'components';
import template from './navigation.tpl.html';

angular
  .module(MODULE_NAME)
  .component('navigation', {
    template
  });