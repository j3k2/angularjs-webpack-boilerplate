import angular from 'angular';
import config from '../../config/config.module.js';
import template from './custom-table.tpl.html';
import './custom-table.scss';
import usersService from '../../services/users.service.js';

export default angular
  .module(config.modules.app + '.component.custom-table', [
    usersService
  ])
  .component('customTable', {
    template,
    controller: ['usersService', function(usersService) {
      var ctrl = this;

      usersService.getUsers()
        .then(function(result){
          ctrl.users = result.data;
        });
    }]
  })
  .name;