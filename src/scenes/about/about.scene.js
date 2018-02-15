import angular from 'angular';
import template from './about.tpl.html';
import config from '../../config/config.module.js';
import customTextArea from '../../components/custom-textarea/custom-textarea.component.js';

export default angular
  .module(config.modules.scenes + '.about', [
    customTextArea
  ])
  .component('about', {
    template
  })
  .name;