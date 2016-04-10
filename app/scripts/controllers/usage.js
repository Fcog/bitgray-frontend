'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:UsageCtrl
 * @description
 * # UsageCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('UsageCtrl', function ($scope, ActualCost, Usage) {

  	$scope.confirmation = false;

  	$scope.usages = Usage.query();

    $scope.saveUsage = function(){

    	var actualCost = ActualCost.query(function(){

	    	var tempAmount = $scope.cost.amount;
	    	$scope.usage = new Usage();
	    	$scope.usage.amount = tempAmount;
	    	$scope.usage.accounts_id = 1;
	    	$scope.usage.costs_id = actualCost[0].id;
	    	$scope.usage.time = tempAmount / actualCost[0].amount;
	    	$scope.usage.$save(function(){
	    		$scope.confirmation = true;
	    		$scope.usages = Usage.query();
	    	});

    	});

    };

  });
