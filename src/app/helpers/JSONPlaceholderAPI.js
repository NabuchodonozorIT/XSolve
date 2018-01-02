class JSONPlaceholder {
	constructor(apiUrl) {
		let _apiUrl = apiUrl;
		this.createApiSearchUrl = function() {
			return `${_apiUrl}/photos/`;
		};
		this.getApiUrl = function() {
			return _apiUrl;
		};
	}

	getApiSearchShowUrl() {
		return this.createApiSearchUrl();
	}

	getApiSearchShow(showId) {
		return this.getApiUrl() + `/photos/${showId}`;
	}
}

export default JSONPlaceholder;