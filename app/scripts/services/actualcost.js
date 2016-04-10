'use strict';

/**
 * @ngdoc service
 * @name frontendApp.ActualCost
 * @description
 * # ActualCost
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('ActualCost', function ($resource, APIURL) {
    // Public API here
    return $resource(APIURL + 'cost/:id', { id: '@id', 'limit': 1, 'orderby': 'id' });
  });
