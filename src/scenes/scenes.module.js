import angular from 'angular';
import config from '../config/config.module';

import usersScene from './users/users.scene';
import homeScene from './home/home.scene';

export default angular
  .module(config.modules.scenes, [
    usersScene,
    homeScene,
  ])
  .name;
