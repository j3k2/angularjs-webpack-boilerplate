import config from '../config/config.module';

export default {
  name: 'usersService',
  factory: ['$http', function ($http) {
    const resourceBase = 'usesrs/';
    return {
      getUsers() {
        return $http.get(config.api.base + resourceBase);
      },
    };
  }]
}