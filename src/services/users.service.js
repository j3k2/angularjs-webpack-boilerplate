import angular from 'angular';
import config from '../config/config.module.js';

export default angular.module(config.modules.app + '.service.users', [])
  .factory('usersService', ['$http', function ($http) {
    const resourceBase = 'users/';
    return {
      getUsers: function () {
        return $http.get(config.api.base + resourceBase);
      }
    }
  }]).name;