import JSONPlaceholderAPI from './../../helpers/JSONPlaceholderAPI.js';

class ShowDetailsService extends JSONPlaceholderAPI {
  //@ngInject
  constructor(apiUrl, $http) {
  	super(apiUrl);
  	angular
  	  .extend(this, {
  	  	$http
  	  });
  }

  getShowDetailsById(showId) {
  	return this.$http({
  		method: 'GET',
  		url: this.getApiSearchShow(showId)
  	})
  	  .then((response) => response.data);
  }
}

export default ShowDetailsService;