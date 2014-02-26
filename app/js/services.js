'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var wishListServices = angular.module('myApp.services', [ 'ngResource' ]);

// one file per section -> efficiency

wishListServices.factory('WishFactory', [ '$resource', 
   function($resource) {
	return $resource('json/:sectionId.json', {}, {
		query : {
			method : 'GET',
			params : {
				sectionId : 'sections'
			},
			isArray : true
		}
	});
} ]);


//updates sections.json file
wishListServices.factory('UpdateSectionFactory', [ '$resource',
		function($resource) {
			return $resource('json/sections.json', {}, {
				'update' : {
					method : 'PUT', //post = create; put = create or update
					params : {
						
					}
				}
			});
		} ]);
