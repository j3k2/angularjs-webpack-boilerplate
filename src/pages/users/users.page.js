import angular from 'angular';
import template from './users.tpl.html';
import config from '../../config/global.config';
import customTable from '../../components/custom-table/custom-table.component';

export default angular
  .module(`${config.modules.pages}.users`, [
    customTable,
  ])
  .component('users', {
    template,
  })
  .name;
