class HomeCtrl {
	/*@ngInject*/
	constructor($state, $scope, SearchService, Notifications) {
		angular.extend(this, {
			$state,
			$scope,
			SearchService,
			Notifications,
			itemList: [],
			searchValue: ''
		});
	}

    getListOfAlbum() {
		let me = this;
		me.SearchService.getList()
            .then( response => {
            console.log("response : ",response);
		me.itemList = response.filter((item) => item.id <= 10);
    	}).catch(() =>
		me.Notifications.showToastNotification('Server error occured, try again later'));
}

	onSearchChange(searchText) {
	let me = this;
		me.SearchService.getList(searchText)
        .then( response => {
          console.log("response : ",response);
		me.itemList = response.filter((item) => item.title.indexOf(searchText) != -1);
        }).catch(() =>
	me.Notifications.showToastNotification('Server error occured, try again later'));
	}

	onItemClick(item) {
		let me = this;
		if(!angular.isObject(item) || !item.id) {
			me.Notifications.showToastNotification('Something goes wrong, try again later');
		} else {
			me.$state.go('showDetails', {item, id: item.id});
		}
	}
}

export default HomeCtrl;
