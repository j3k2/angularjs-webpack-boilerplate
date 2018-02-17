import angular from 'angular';
import template from './custom-table.tpl.html';
import './custom-table.scss';
import usersService from '../../services/users.service';

export default angular
  .module('customTable.component', [])
  .factory(usersService.name, usersService.factory)
  .component('customTable', {
    template,
    controller: [usersService.name, function (users) {
      const ctrl = this;

      users.getUsers()
        .then(result => {
          ctrl.users = result;
        })
        .catch(error => {
          ctrl.users = error;     
        });
    }],
  })
  .name;
