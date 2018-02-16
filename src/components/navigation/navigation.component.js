import angular from 'angular';
import config from '../../config/global.config';
import template from './navigation.tpl.html';

export default angular
  .module(`${config.modules.app}.component.navigation`, [])
  .component('navigation', {
    template,
  })
  .name;
