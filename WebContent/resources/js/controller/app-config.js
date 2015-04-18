angular
.module('videoManagement', ['ngRoute']);

angular
.module('videoManagement')
.config(['$routeProvider',
function($routeProvider) {
	$routeProvider
	.when('/video', {
		templateUrl: 'video.html',
		controller: 'videoController'
	}).when('/category', {
		templateUrl: 'category.html',
		controller: 'categoryController'
	}).otherwise({
		redirectTo: '/video'
	});
}]);