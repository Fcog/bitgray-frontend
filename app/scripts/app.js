'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ui.router',
    'ngResource'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    // Redirect to the auth state if any other states
    // are requested other than users
    $urlRouterProvider.otherwise('account');
    
    $stateProvider
      .state('account', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })              
      .state('cost', {
        url: '/actual-cost',
        templateUrl: 'views/cost.html',
        controller: 'CostCtrl'
      })
      .state('usage', {
        url: '/usage',
        templateUrl: 'views/usage.html',
        controller: 'UsageCtrl'
      })      
      .state('recharge', {
        url: '/recharge',
        templateUrl: 'views/recharge.html',
        controller: 'RechargeCtrl'
      });            
  })
  .run(function($state) {
    $state.go('account'); //make a transition to home state when app starts
  });