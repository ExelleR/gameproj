'use strict';

/**
 * @ngdoc function
 * @name gameprojApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameprojApp
 */
angular.module('gameprojApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
