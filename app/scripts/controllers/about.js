'use strict';

/**
 * @ngdoc function
 * @name gameprojApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gameprojApp
 */
angular.module('gameprojApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
