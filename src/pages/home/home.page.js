import angular from 'angular';
import template from './home.tpl.html';
import config from '../../config/global.config';

export default angular
  .module(`${config.modules.pages}.home`, [])
  .component('home', {
    template,
  })
  .name;
