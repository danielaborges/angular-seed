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

wishListControllers.controller('ShowListCtrl', ['$scope', '$http'
     ,function($scope, $http) {
	
		//fazer funcao/servico loadData()
		$http.get('json/sections.json').success(function(data){
			$scope.sections = data;
		});
		$http.get('json/pessoal.json').success(function(data){
			$scope.wishes = data;
		});
		
		   
		/*$scope.sections = loadData('json/sections.json');
	    $scope.wishes = loadData('json/pessoal.json');
		
		var loadData = function(fileToLoad){
			$http.get(fileToLoad).success(function(data){
				return data;
			});				
		};*/
		
		$scope.sectionName = 'pessoal';
		$scope.priority = 'priority'; 
		
		//fazer funcao/servico saveData()
		$scope.save = function() {
		    $http.post('json/pessoal.json', $scope.sections).then(function(data) {
		      $scope.msg = 'Data saved';
		    });
		   // $scope.msg = 'Data sent: '+ JSON.stringify($scope.sections);
		};
}]);

wishListControllers.controller('ShowSectionsCtrl', [function() {

}]);

wishListControllers.controller('ExpandSectionCtrl', [function() {

}]);