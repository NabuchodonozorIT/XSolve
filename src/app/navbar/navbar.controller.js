class NavbarCtrl {
	/*@ngInject*/
	constructor($state, $scope) {
		angular.extend(this, {
			$state,
			$scope,
			desctiptionOfH1 : "Menu",
			EnumState : {
				HOME: "home",
				TABLE_VIEW: "tableView"
			}
		});
	}


	goToView(goTo) {
		let me = this;
		console.log("### go to ", goTo);
		switch(goTo){
			case me.EnumState.HOME:
				me.$state.go(me.EnumState.HOME);
				break;
			case me.EnumState.TABLE_VIEW:
				me.$state.go(me.EnumState.TABLE_VIEW);
				break;
		}
	}
}

export default NavbarCtrl;