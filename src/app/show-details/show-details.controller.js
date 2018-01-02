class ShowDetailsCtrl {
  //@ngInject
  constructor($q, $stateParams, ShowDetailsService) {
    angular.extend(this, {
      $stateParams,
      $q,
      ShowDetailsService,
      showId: $stateParams.id
    });
    this.getShow();
  }

  getShow() { 
    let promise = !!this.$stateParams.item 
      ? this.$q.when(this.$stateParams.item)
      : this.ShowDetailsService.getShowDetailsById(this.showId);

    promise
      .then( (show) => this.show = show);

  }
}

export default ShowDetailsCtrl;