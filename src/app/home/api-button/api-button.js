class ApiButton {
  constructor() {
    angular.extend(this, {
      template: require('./api-button.html'),
      restrict: 'E',
      scope: {
        getListOfAlbum: '&',
        label: '@'
      }
    });
  }
}

export default ApiButton;
