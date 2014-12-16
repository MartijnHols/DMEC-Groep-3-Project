var app = angular.module('expeditie', ['ngRoute', 'ngSanitize', 'ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/iets', {
		templateUrl: 'templates/iets.html',
		controller: 'iets'
	}).otherwise({
		templateUrl: 'templates/expeditie/groepsgenoten.html',
		controller: 'groepsgenoten'
	});
}]);

app.controller('main', function ($scope) {

});
app.controller('groepsgenoten', function ($scope) {
	$scope.groepsgenoten = [
		{
			naam: 'Milou Timmerman',
			leeftijd: 19,
			foto: 'img/hethoofd.jpg',
			opleiding: {
				naam: 'Geneeskunde',
				jaar: 3
			}
		},
		{
			naam: 'Coen Calkhoven',
			leeftijd: 21,
			foto: 'img/hethoofd.jpg',
			opleiding: {
				naam: 'Biomedische Wetenschappen',
				jaar: 2
			}
		},
		{
			naam: 'Dwayne Buurstede',
			leeftijd: 25,
			foto: 'img/hethoofd.jpg',
			opleiding: {
				naam: 'Geneeskunde',
				jaar: 4
			}
		},
		{
			naam: 'Martijn Hols',
			leeftijd: 24,
			foto: 'img/hethoofd.jpg',
			opleiding: {
				naam: 'Geneeskunde',
				jaar: 3
			}
		}
	];
});
