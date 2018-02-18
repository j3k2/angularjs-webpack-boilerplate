import config from '../common/config';

export default {
  name: 'usersService',
  factory: ['$http', 'localStorageService', ($http, localStorageService) => {
    function getUsers() {
      var users = localStorageService.get('users');
      if (users) {
        return new Promise(resolve => {
          resolve(users);
        });
      } else {
        return $http.get(config.api.base + config.api.resources.users)
          .then(result => {
            users = result.data;
            localStorageService.set('users', users);
            return users;
          })
          .catch(error => {
            return error;
          });
      }
    }

    return {
      getUsers
    };
  }]
}