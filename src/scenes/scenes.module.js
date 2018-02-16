import angular from 'angular';
import config from '../config/config.module.js';

import usersScene from './users/users.scene.js';
import homeScene from './home/home.scene.js';

export default angular.module(config.modules.scenes, [
  usersScene,
  homeScene
]).name;