require('./table-view.scss');

import TableCtrl from './table-view.controller.js';
import ShowDetailsService from './../home/services/show-details.service.js';

const tableModule = angular
  .module('jsonplaceholder.tableCtrl', ['LocalStorageModule'])
	.service('ShowDetailsService', ShowDetailsService)
  	.config(function($stateProvider, localStorageServiceProvider) {
		$stateProvider
		  .state('tableView', {
			url: '/table-view',
			template: require('./table-view.html'),
			controller: TableCtrl,
			controllerAs: 'tableView'
		  });
		localStorageServiceProvider
			.setPrefix('darkCookie')
			.setStorageType('sessionStorage')
			.setNotify(true, true);
	  });

export default tableModule;
