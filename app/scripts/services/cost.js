'use strict';

/**
 * @ngdoc service
 * @name frontendApp.cost
 * @description
 * # cost
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('Cost', function ($resource, APIURL) {
    // Public API here
    return $resource(APIURL + 'cost/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
