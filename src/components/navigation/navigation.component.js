import angular from 'angular';
import template from './navigation.tpl.html';

export default angular
  .module('navigationModule', [])
  .component('navigation', {
    template,
  })
  .name;
