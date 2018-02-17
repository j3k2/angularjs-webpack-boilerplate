import angular from 'angular';
import config from '../config/common.config';

import navigation from '../components/navigation/navigation.component';

export default angular
  .module(`${config.appName}.commonComponents`, [
    navigation
  ])
  .name;