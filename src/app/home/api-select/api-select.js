class ApiSelect {
  constructor() {
    angular.extend(this, {
      template: require('./api-select.html'),
      restrict: 'E',
      scope: {
        itemList: '=',
        selectRange:'=',
        getListOfAlbum:'@',
        rangeOfElements:'='
      }
    });
  }
}

export default ApiSelect;
