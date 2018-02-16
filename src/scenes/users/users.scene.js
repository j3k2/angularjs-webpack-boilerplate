import angular from 'angular';
import template from './users.tpl.html';
import config from '../../config/config.module';
import customTable from '../../components/custom-table/custom-table.component';

export default angular
  .module(`${config.modules.scenes}.users`, [
    customTable,
  ])
  .component('users', {
    template,
  })
  .name;
