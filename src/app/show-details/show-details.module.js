import ShowDetailsCtrl from './show-details.controller.js';
import ShowDetailsService from './../home/services/show-details.service.js';

const showDetails = angular
  .module('jsonplaceholder.showDetails', [])
  .service('ShowDetailsService', ShowDetailsService)
  .config(($stateProvider) => {
  	$stateProvider
  	  .state('showDetails', {
  	  	url:'/showDetails/:id',
        template: require('./show-details.html'),
  	  	controller: ShowDetailsCtrl,
  	  	controllerAs: 'showDetails',
        params: {
          item: null
        }
  	  });
  });

  export default showDetails;