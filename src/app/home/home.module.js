require('./home.scss');

import HomeCtrl from './home.controller.js';
import SearchInput from './api-search-input/api-search-input.js';
import Button from './api-button/api-button.js';

const HomeModule = angular
  .module('jsonplaceholder.home', [])
	.controller('HomeCtrl', HomeCtrl)
	.directive('apiSearchInput', () => new SearchInput())
	.directive('apiButton', () => new Button())
  	.config(function($stateProvider) {
		$stateProvider
		  .state('home', {
			url: '/home',
			template: require('./home.html'),
			controller: HomeCtrl,
			controllerAs: 'home'
		  });
	  });

export default HomeModule;
