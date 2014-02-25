'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var wishListServices = angular.module('myApp.services', []);

wishListServices.value('version', '0.1');
