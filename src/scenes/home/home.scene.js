import angular from 'angular';
import template from './home.tpl.html';
import config from '../../config/config.module.js';

export default angular
  .module(config.modules.scenes + '.home', [])
  .component('home', {
    template
  })
  .name;