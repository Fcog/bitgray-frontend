'use strict';

/**
 * @ngdoc service
 * @name frontendApp.usage
 * @description
 * # usage
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('Usage', function ($resource, APIURL) {
    // Public API here
    return $resource(APIURL + 'usage/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  });    
