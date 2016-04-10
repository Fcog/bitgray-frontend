'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:RechargeCtrl
 * @description
 * # RechargeCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('RechargeCtrl', function ($scope, ActualCost, Recharge) {

  	$scope.confirmation = false;

    $scope.saveRecharge = function(){

    	var actualCost = ActualCost.query(function(){

	    	var tempAmount = $scope.cost.amount;
	    	$scope.recharge = new Recharge();
	    	$scope.recharge.amount = tempAmount;
	    	$scope.recharge.accounts_id = 1;
	    	$scope.recharge.costs_id = actualCost[0].id;
	    	$scope.recharge.time = tempAmount / actualCost[0].amount;
	    	$scope.recharge.$save(function(){
	    		$scope.confirmation = true;
	    	});

    	});

    };

  });
