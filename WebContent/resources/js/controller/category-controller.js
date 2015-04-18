angular
.module('videoManagement')
.controller('categoryController',
['$scope', 'videoService',
 function($scope, videoService) {
	videoService.getAllCategories()
	.success(function(response) {
		$scope.categories = response.category;
	});
	
}]);