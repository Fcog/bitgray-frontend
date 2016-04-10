'use strict';

/**
 * @ngdoc service
 * @name frontendApp.recharge
 * @description
 * # recharge
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('Recharge', function ($resource, APIURL) {
    // Public API here
    return $resource(APIURL + 'recharge/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  });    