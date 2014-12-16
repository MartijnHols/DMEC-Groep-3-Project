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
			naam: 'Yvonne Geraats',
			leeftijd: 22,
			foto: 'img/hethoofd.jpg',
			opleiding: {
				naam: 'Geneeskunde',
				jaar: 3
			},
			omschrijving: 'Yvonne is een geweldige fotografe die gestructureerd te werk gaat. Ze levert prachtige, creatieve en kwalitatieve fotografie en doet haar werk met een grote passie. Yvonne is altijd enthousiast en gedreven en staat ook altijd voor je klaar. Ik kijk uit naar verdere samenwerking met haar.'
		},
		{
			naam: 'Martijn Hols',
			leeftijd: 24,
			foto: 'img/ik.jpg',
			opleiding: {
				naam: 'Geneeskunde',
				jaar: 3
			},
			omschrijving: 'Ik ben een software ontwikkelaar met een passie voor web development. Vanuit deze passie ben ik al ruim 10 jaar (sinds 2004) aan het ontwikkelen.'
		},
		{
			naam: 'Milou Timmerman',
			leeftijd: 19,
			foto: 'img/demilou.jpg',
			opleiding: {
				naam: 'Geneeskunde',
				jaar: 3
			},
			omschrijving: 'Milou is een getalendeerde ontwerpster, met oog voor detail. Zo weet zij de juiste kleuren te combineren voor ieder project en iedere doelgroep, verder kan ze goede en professionele websites ontwerpen én bouwen! Ook maakt ze prachtige foto\'s en heeft ze ongelofelijk veel verstand van fotografie. Verder kan ze goed met klanten overleggen.'
		},
		{
			naam: 'Coen Calkhoven',
			leeftijd: 21,
			foto: 'img/hetcoen.jpg',
			opleiding: {
				naam: 'Biomedische Wetenschappen',
				jaar: 2
			},
			omschrijving: 'Coen, Coen, Coen, Coen. De een zegt held de andere honey, maar wij zeggen Coen.'
		},
		{
			naam: 'Dwayne Buurstede',
			leeftijd: 25,
			foto: 'img/isdwayne.jpg',
			opleiding: {
				naam: 'Geneeskunde',
				jaar: 4
			},
			omschrijving: 'Ontwikkeling van websites (webapps en mobiele websites) van begin tot eind, waaronder het overleg met klanten, design opleveren, programmeren en de daadwerkelijke oplevering. Hierbij ontwikkel ik mijzelf door steeds gebruik te maken van de meest recente webtechnieken.'
		}
	];
	$('.box .content').niceScroll({
		autohidemode: false
	});
});
