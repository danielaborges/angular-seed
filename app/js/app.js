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
  $routeProvider.when('/section', {templateUrl: 'partials/section.html', controller: 'ShowSectionsCtrl'});
  $routeProvider.when('/section/:sectionId', {templateUrl: 'partials/section-detail.html', controller: 'ExpandSectionCtrl'});
  $routeProvider.otherwise({redirectTo: '/wishlist'});
}]);
