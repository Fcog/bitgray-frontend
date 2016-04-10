'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CostCtrl
 * @description
 * # CostCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CostCtrl', function ($scope, ActualCost, Cost) {

    $scope.cost = new Cost();
    $scope.actualAmount = 0;

    var cost = ActualCost.query(function(){
    	$scope.cost = cost[0];
    	$scope.actualAmount = $scope.cost.amount;
    });

    $scope.saveCost = function(){
    	var tempAmount = $scope.cost.amount;
    	$scope.cost = new Cost();
    	$scope.cost.amount = tempAmount;
    	$scope.cost.$save(function(){
    		$scope.actualAmount = tempAmount;
    	});
    };
  });
