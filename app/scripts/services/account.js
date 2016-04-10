'use strict';

/**
 * @ngdoc service
 * @name frontendApp.balance
 * @description
 * # balance
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('Account', function ($resource, APIURL) {
    // Public API here
    return $resource(APIURL + 'account/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
