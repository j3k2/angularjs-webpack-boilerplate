import angular from 'angular';
import config from '../config/global.config';

import navigation from './navigation/navigation.component';

export default angular
  .module(`${config.appName}.globalComponents`, [
    navigation
  ])
  .name;