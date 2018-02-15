import angular from 'angular';
const MODULE_NAME = 'scenes';
import template from './about.tpl.html';

angular
  .module(MODULE_NAME)
  .component('about', {
    template
  });