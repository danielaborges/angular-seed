'use strict';

/* Controllers */

var wishListControllers = angular.module('myApp.controllers', []);

// TODO apagar $http assim que tiver vector dinamico de seccoes
wishListControllers.controller('ShowListCtrl',
		[
				'$scope',
				'$http',
				'$routeParams',
				'WishFactory',
				'UpdateSectionFactory',
				function($scope, $http, $routeParams, WishFactory,
						UpdateSectionFactory) {
					$scope.sectionId = $routeParams.sectionId;

					$scope.sections = WishFactory.query();

					// bad implementation
					$http.get('json/pessoal.json').success(function(data) {
						$scope.wishes = data;
					});

					/*
					 * alert($scope.sections.length); for(var i=0; i <
					 * $scope.sections.length; i++){
					 * 
					 * //NOTE: $scope.wishes esta a ser adicionado multiplas
					 * vezes.. como alterar dinamicamente? $scope.wishes =
					 * wishFactory.query({sectionId : $routeParams.sectionId},
					 * function(wish) { alert('hello!'); }); alert(i); }
					 */

					// saveChanges
					$scope.save = function() {						
						//$http.post('api/wishes', $scope.wishes);
						alert("Changes were saved!\r\n"
								+ JSON.stringify($scope.wishes)); //but to saved to JSON (yet..)
					};

					// add new Section
					// TODO
					$scope.addNewSection = function(sectionData) {

						$scope.nSectionData = {
							"id" : sectionData.nSectionName,
							"name" : sectionData.nSectionName,
							"priority" : "2",
							"icon" : "heart"
						};
						$scope.sections.append($scope.nSectionData);
						$http.post('json/sections', $scope.sections);

						// JSON.stringify($scope.sections);
						// UpdateSectionFactory.update({id:$scope.nSectionData});
						alert('section added!' + $scope.nSectionData.id);
					}
					// add new Wish
					// TODO

				} ]);

wishListControllers.controller('ShowSectionsCtrl', [ '$scope', 'WishFactory',
		function($scope, WishFactory) {
			$scope.sections = WishFactory.query();
		} ]);

wishListControllers.controller('ExpandSectionCtrl', [ '$scope', '$routeParams',
		'WishFactory', function($scope, $routeParams, WishFactory) {
			$scope.sectionId = $routeParams.sectionId;

			$scope.wishes = WishFactory.query({
				sectionId : $routeParams.sectionId
			}, function(wish) {
				// alert('hello!');
			});
		} ]);
