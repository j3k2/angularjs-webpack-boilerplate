import config from '../config/config.module';

export default {
  name: 'usersService',
  factory: ['$http', function ($http) {
    var users;

    function getUsers() {
      if (users) {
        return new Promise((resolve) => {
          resolve(users);
        })
      } else {
        return $http.get(config.api.base + config.api.resources.users)
          .then(function (result) {
            users = result.data;
            return users;
          })
          .catch(function (error) {
            return error;
          });
      }
    }

    return {
      getUsers
    };
  }]
}