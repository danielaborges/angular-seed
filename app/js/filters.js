'use strict';

/* Filters */

var wishListFilters = angular.module('myApp.filters', []);

wishListFilters.filter('checkmark', function() {
	   return function(input) {
	    /* return input ? '\u2713' : '\u2718';**/
		   return input ? 'ok' : 'remove';
	   };
	 });

