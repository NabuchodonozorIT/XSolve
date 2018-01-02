import JSONPlaceholderAPI from './../../helpers/JSONPlaceholderAPI.js';

 class SearchService extends JSONPlaceholderAPI {
 	constructor(apiUrl, $http) {
 	  super(apiUrl);
      angular
 	    .extend(this, {
 	    	$http
 	    });
 	}

	getList() {
		let promiseObject = {
			method: 'GET',
			url: this.getApiSearchShowUrl(),
			params: {}
		};

		return this.$http(promiseObject)
				.then((response) => response.data);
	}

	search(term) {
		console.log('term',term);
		let promiseObject = {
			method: 'GET',
			url: this.getApiSearchShowUrl(),
			params: {
				q: term
			}
		};

		return this.$http(promiseObject)
				.then((response) => response.data);
	}
 }

 export default angular
   .module('jsonplaceholder.home.service', [])
   .service('SearchService', SearchService);