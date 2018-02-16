import config from '../config/global.config';

export default {
  name: 'usersService',
  factory: ['$http', ($http) => {
    var users;

    function getUsers() {
      if (users) {
        return new Promise((resolve) => {
          resolve(users);
        })
      } else {
        return $http.get(config.api.base + config.api.resources.users)
          .then((result) => {
            users = result.data;
            return users;
          })
          .catch((error) => {
            return error;
          });
      }
    }

    return {
      getUsers
    };
  }]
}