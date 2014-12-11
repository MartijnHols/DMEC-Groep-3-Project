var app = angular.module('expeditie', ['ngRoute', 'ui']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/iets', {
		templateUrl: 'templates/iets.html'
	}).otherwise({
		templateUrl: 'templates/index.html'
	});
}]);

app.controller('main', function ($scope) {
	$scope.who = 'World';
});
