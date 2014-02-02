'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'partials/signup.html', 
      controller: 'SignupCtrl'}
  );
  $routeProvider.when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'}
  );
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);