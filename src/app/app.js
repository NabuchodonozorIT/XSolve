import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import lodash from 'lodash';
import angularLocalStorage from 'angular-local-storage';

function getModuleName(module) { return module.name || module.default.name; }

const appDependencies = [
  'ui.router',
  'ngMaterial'
];

const appModules = [
  //Directive
  require('./navbar/navbar.module.js'),
  //Views
  require('./home/home.module.js'),
  require('./show-details/show-details.module.js'),
  require('./table-view/table-view.module.js'),

  //Services
  require('./home/services/search.service.js'),
  require('./services/notifications.service.js')
];

angular
  .module('jsonplaceholder', appDependencies.concat(appModules.map(getModuleName)))
  .constant('apiUrl', '//jsonplaceholder.typicode.com')
  .constant('_', _)
  .config( /*@ngInject*/ ($urlRouterProvider, $mdThemingProvider) => {
    $urlRouterProvider.otherwise('/table-view');

    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('teal');
  });
