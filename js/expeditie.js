var app = angular.module('expeditie', ['ngRoute', 'ngSanitize', 'ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/iets', {
		templateUrl: 'templates/iets.html',
		controller: 'iets'
	}).otherwise({
		templateUrl: 'templates/expeditie/expeditie.html',
		controller: 'expeditie'
	});
}]);

app.controller('main', function ($scope) {

});
app.controller('expeditie', function ($scope) {

});
