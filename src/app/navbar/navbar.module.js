import NavbarDirective from './navbar.directive.js';

const navbarModule = angular
    .module('jsonplaceholder.navbar',[])
        .directive('navbar', () => new NavbarDirective());

export default navbarModule;