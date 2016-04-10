'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, Account, Recharge, ActualCost) {

  	$scope.time = 0;

    $scope.account = Account.get({id:1}, function(){

    	var actualCost = ActualCost.query(function(){

    		$scope.time = $scope.account.balance / actualCost[0].amount;
    		$scope.recharges = Recharge.query();
    	});

    });

    $scope.recharges = Recharge.query();

  });
