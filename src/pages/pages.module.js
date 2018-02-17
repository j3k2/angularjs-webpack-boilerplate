import angular from 'angular';
import config from '../config/global.config';

import usersPage from './users/users.page';
import homePage from './home/home.page';

export default angular
  .module(`${config.appName}.pages`, [
    usersPage,
    homePage,
  ])
  .name;
