angular
.module('videoManagement')
.controller('videoController',
['$scope', 'videoService',
 function($scope, videoService) {
	videoService.getVideosByCategoryId(1)
	.success(function(response) {
		$scope.videos = response.video;
		
		drawHighChart(response.video);
		
		drawChart(response.video);
	});
	
	videoService.getAllCategories()
	.success(function(response) {
		$scope.categories = response.category;
	});
	
	$scope.getVideosByCategoryId = function(category) {
		videoService.getVideosByCategoryId(category.categoryId)
		.success(function(response) {
			$scope.videos = response.video;
			
			drawHighChart(response.video);
			
			drawChart(response.video);
		});
	};
}]);