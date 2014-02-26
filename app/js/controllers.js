'use strict';

/* Controllers */

var wishListControllers = angular.module('myApp.controllers', []);

/*
 wishListControllers.controller('ShowListCtrl', ['$scope', 'Section', 'Wish'
 ,function($scope, Section, Wish) {
 $scope.sections = Section.query();
 $scope.wishes = Wish.query();
 $scope.sectionName = 'pessoal';
 }]);*/

wishListControllers.controller('ShowListCtrl', [
		'$scope',
		'$http',
		function($scope, $http) {

			$http.get('json/sections.json').success(function(data) {
				$scope.sections = data;
			});
			$http.get('json/pessoal.json').success(function(data) {
				$scope.wishes = data;
			});

			$scope.sectionName = 'pessoal';
			$scope.priority = 'priority';

			//TODO:: funcao/servico saveData()
			$scope.save = function() {
				$http.post('json/pessoal.json', $scope.sections).then(
						function(data) {
							$scope.msg = 'Data saved';
						});
				// $scope.msg = 'Data sent: '+ JSON.stringify($scope.sections);
			};
		} ]);

wishListControllers.controller('ShowSectionsCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/sections.json').success(function(data) {
				$scope.sections = data;
			});
		} ]);

wishListControllers.controller('ExpandSectionCtrl', [ '$scope', '$routeParams',
		'wishFactory',
		function($scope, $routeParams, wishFactory) {
			$scope.sectionId = $routeParams.sectionId;

			$scope.wishes = wishFactory.query({sectionId: $routeParams.sectionId}, function(wish){	
			//	alert('hello!');
			});
}]);
