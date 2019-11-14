import angular from 'angular';
import config from '../common/config';

import navigation from './navigation/navigation.component';

export default angular
  .module(`${config.appName}.persistentComponentsr`, [
    navigation
  ])
  .name;