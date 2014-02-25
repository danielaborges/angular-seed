'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var wishListServices = angular.module('myApp.services', ['ngResource']);

wishListServices.value('version', '0.1');
/*
wishListServices.factory('Section', ['$resource',
    function($resouce){
		return $resource('json/:sectionId.json', {}, {
			query: {method:'GET', params:{sectionId: 'sections'}, isArray:true}
	    });
}]);*/
