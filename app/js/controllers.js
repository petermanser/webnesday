'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('SignupCtrl', [function() {
  }])
  .controller('ContactCtrl', [function() {
  }])
  .controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
      return '';
        var currentRoute = $location.path().substring(1) || 'signup';
        return page === currentRoute ? 'active' : '';
    };
    }]
);