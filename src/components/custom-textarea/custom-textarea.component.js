import angular from 'angular';
import config from '../../config/config.module.js';
import template from './custom-textarea.tpl.html';

export default angular
  .module(config.modules.app + '.component.custom-textarea', [])
  .component('customTextarea', {
    template
  })
  .name;