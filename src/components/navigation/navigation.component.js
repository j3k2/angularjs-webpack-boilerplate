import angular from 'angular';
import config from '../../config/config.module.js';
import template from './navigation.tpl.html';

export default angular
  .module(config.modules.app + '.component.navigation', [])
  .component('navigation', {
    template
  })
  .name;