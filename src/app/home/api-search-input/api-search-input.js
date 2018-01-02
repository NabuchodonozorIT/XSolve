class ApiSearchInput {
  constructor() {
    angular.extend(this, {
      template: require('./api-search-input.html'),
      restrict: 'E',
      scope: {
        onSearchChange: '&',
        description: '@'
      }
    });
  }
}

export default ApiSearchInput;
