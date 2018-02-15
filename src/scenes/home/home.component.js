import angular from 'angular';
const MODULE_NAME = 'scenes';
import template from './home.tpl.html';

angular
  .module(MODULE_NAME)
  .component('home', {
    template
  });