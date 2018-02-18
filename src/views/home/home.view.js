import angular from 'angular';
import template from './home.tpl.html';

export default angular
  .module('home.view', [])
  .component('home', {
    template,
  })
  .name;
