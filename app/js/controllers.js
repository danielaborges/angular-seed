'use strict';

/* Controllers */

var wishListControllers = angular.module('myApp.controllers', []);
/*
wishListControllers.controller('ShowListCtrl', ['$scope', 'Wish'
   ,function($scope, Wish) {
		$scope.wishes = Wish.query();		
}]);*/

wishListControllers.controller('ShowListCtrl', ['$scope', '$http'
     ,function($scope, $http) {
		$http.get('json/pessoal.json').success(function(data){
			$scope.wishes = data;
		});
		$scope.sectionName = 'pessoal';
}]);

wishListControllers.controller('ShowSectionsCtrl', [function() {

}]);

wishListControllers.controller('ExpandSectionCtrl', [function() {

}]);