'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wishlist', {templateUrl: 'partials/wishlist.html', controller: 'ShowListCtrl'});
  $routeProvider.when('/sections', {templateUrl: 'partials/sections.html', controller: 'ShowSectionsCtrl'});
  $routeProvider.when('/section-detail', {templateUrl: 'partials/section-detail.html', controller: 'ExpandSectionCtrl'});
  $routeProvider.otherwise({redirectTo: '/wishlist'});
}]);
