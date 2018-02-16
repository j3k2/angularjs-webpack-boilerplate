import angular from 'angular';
import config from '../../config/config.module';
import template from './custom-table.tpl.html';
import './custom-table.scss';
import usersService from '../../services/users.service';

export default angular
  .module(`${config.modules.app}.component.custom-table`, [])
  .factory(usersService.name, usersService.factory)
  .component('customTable', {
    template,
    controller: [usersService.name, function (users) {
      const ctrl = this;

      users.getUsers()
        .then((result) => {
          ctrl.users = result;
        })
        .catch((error) => {
          ctrl.users = error;     
        });
    }],
  })
  .name;
