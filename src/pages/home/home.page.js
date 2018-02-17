import angular from 'angular';
import template from './home.tpl.html';

export default angular
  .module('home.page', [])
  .component('home', {
    template,
  })
  .name;
