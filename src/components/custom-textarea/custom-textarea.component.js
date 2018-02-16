import angular from 'angular';
import config from '../../config/config.module.js';
import template from './custom-textarea.tpl.html';
import './custom-textarea.scss';

export default angular
  .module(config.modules.app + '.component.custom-textarea', [])
  .component('customTextarea', {
    template
  })
  .name;