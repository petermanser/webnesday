'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'partials/home.html', 
      controller: 'HomeCtrl'}
  );
  $routeProvider.when('/signup', {
      templateUrl: 'partials/signup.html', 
      controller: 'SignupCtrl'}
  );
  $routeProvider.when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'}
  );
  $routeProvider.otherwise({redirectTo: '/'});
}]);
