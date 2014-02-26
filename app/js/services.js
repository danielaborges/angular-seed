'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var wishListServices = angular.module('myApp.services', ['ngResource']);

// one file per section -> efficiency

wishListServices.factory('wishFactory', ['$resource',
        function($resource){
	return $resource('json/:sectionId.json', {},{
		query: {method: 'GET', params:{sectionId:'sections'}, isArray:true}
		});
	}]);
	