import angular from 'angular';
import config from '../config/config.module.js';

import aboutScene from './about/about.scene.js';
import homeScene from './home/home.scene.js';

export default angular.module(config.modules.scenes, [
  aboutScene,
  homeScene
]).name;