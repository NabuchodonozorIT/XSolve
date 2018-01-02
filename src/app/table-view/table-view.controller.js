class TableCtrl {
	/*@ngInject*/
	constructor($state, $scope, SearchService, Notifications, localStorageService) {
		angular.extend(this, {
			$state,
			$scope,
			SearchService,
			Notifications,
			localStorageService,
			itemList: [],
			selectRange:null,
			orderByColumn: "id",
			filterBy: "",
			orderByDir: false
		});
	}

	saveToLocalStorage(key, val) {
		let me = this;
		me.localStorageService.set(key, val);
	}

	getDataFromLocalStorage(key) {
		let me = this;
		return me.localStorageService.get(key);
	}

	setDataForTableContent(elementsSource){
		let me = this;
		let elements = elementsSource.filter((item) => item.id <= me.lastElement && item.id >= me.firstElement);
		me.setRangeOfElements(elementsSource.length);
		let tableContent = [{nameTable : "elements of "+me.firstElement+" to "+(me.firstElement+10), elements :[]}];
		for ( var i = 0; i<elements.length; i++){
			tableContent[me.nextTable].elements.push(elements[i]);
			if (i % 10  == 9){
				tableContent.push({nameTable : "elements of " + (me.firstElement+i+2) + " to "+(me.firstElement+i+11), elements :[]});
				me.nextTable++;
			}
		}
		console.log('elements : ',tableContent);
		me.itemList = tableContent;
	}

	setRangeOfElements(elementsNumber){
		let me = this;
		me.rangeOfElements = [];
		let countOfRange = elementsNumber / 100;
		for ( var i = 0; i < countOfRange; i++){
			me.rangeOfElements.push({min: 1 + 100 * i, max: 100 * (i+1), label:"range from "+( 1 + 100 * i)+" to "+ (100 * (i+1))});
		}
		console.log("### display range ", me.rangeOfElements);
	}

    getListOfAlbum() {
		let me = this;
		let dataFromLocalStorage = me.getDataFromLocalStorage("response");

		me.filterBy = "";
		me.nextTable = 0;
		me.firstElement = me.selectRange ? me.selectRange.min : 0;
		me.lastElement = me.selectRange ? me.selectRange.max : 100;

		if (dataFromLocalStorage){
			console.log('### data from localStorage ',dataFromLocalStorage);
			me.setDataForTableContent(dataFromLocalStorage);
		}
		else{
			me.SearchService.getList()
				.then( response => {
				console.log("response from API : ",response);
			me.saveToLocalStorage("response", response);
			me.setDataForTableContent(response);

		}).catch(() =>
		me.Notifications.showToastNotification('Server error occured, try again later'));
		}
	}

	onItemClick(item) {
		if(!angular.isObject(item) || !item.id) {
			this.Notifications.showToastNotification('Something goes wrong, try again later');
		} else {
			this.$state.go('showDetails', {item, id: item.id});
		}
	}

	changeOrder(orderBy) {
		this.orderByColumn = orderBy;
		this.orderByDir = !this.orderByDir;
	}

	onSearchChange(searchText) {
	this.filterBy = searchText;
	}

}

export default TableCtrl;
