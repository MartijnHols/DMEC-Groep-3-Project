var app = angular.module('expeditie', ['ngRoute', 'ngSanitize', 'ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/project', {
			templateUrl: 'templates/expeditie/project.html',
			controller: 'project'
		})
		.when('/expeditie', {
			templateUrl: 'templates/expeditie/expeditie.html',
			controller: 'expeditie'
		})
		.when('/groepsgenoten', {
			templateUrl: 'templates/expeditie/groepsgenoten.html',
			controller: 'groepsgenoten'
		})
		.when('/planning', {
			templateUrl: 'templates/expeditie/planning.html',
			controller: 'planning'
		})
		.when('/documenten', {
			templateUrl: 'templates/expeditie/documenten.html',
			controller: 'documenten'
		})
		.otherwise({
			redirectTo: '/project'
		});
}]);

app.controller('main', function ($scope, $location) {
	$scope.menu = [
		{
			icon: 'fa-lightbulb-o',
			name: 'Project'
		},
		{
			icon: 'fa-compass',
			name: 'Expeditie'
		},
		{
			icon: 'fa-lightbulb-o',
			name: 'Groepsgenoten'
		},
		{
			icon: 'fa-calendar',
			name: 'Planning'
		},
		{
			icon: 'fa-file-text',
			name: 'Documenten'
		}
	];

	$scope.achtergrond = 'img/bgs/1.jpg';

	$scope.navigateTo = function (pageName) {
		$location.path('/' + pageName);
	};

	$scope.applySkrollr = function () {
		// Op dit punt is data-anchor-target="#opdracht{{$index}" nog niet omgezet naar de uiteindelijk waarde,
		// volgende frame wel, dus wacht even
		setTimeout(function () {
			skrollr.init({
				smoothScrollingDuration: 400
			}).refresh();
		}, 200);
	};

	$(document.body).scrollator({
		zIndex: '2'
	});

	$scope.fixScrollbar = function () {
		document.body.scrollTop = 0;
		$(document.body).scrollator('refresh');
	};
});
function setAchtergrond($scope, achtergrond) {
	$scope.$parent.oldAchtergrond = $scope.$parent.oldAchtergrond || $scope.$parent.achtergrond;
	$scope.$parent.achtergrond = achtergrond;
	$scope.$on('$destroy', function () {
		$scope.$parent.achtergrond = $scope.$parent.oldAchtergrond;
	});
}
app.controller('project', function ($scope, $location) {
	$scope.$parent.activePage = 'project';

	// Wacht op de eerstvolgende frame: dan is pas de daadwerkelijke grote bekend
	setTimeout(function () {
		$('.project .content').scrollator({
			zIndex: '2'
		});
	}, 0);
	$scope.$on('$destroy', function () {
		$('.project .content').data('scrollator').destroy();
	});
});
app.controller('expeditie', function ($scope, $location) {
	$scope.$parent.activePage = 'expeditie';

	setAchtergrond($scope, '');

	$scope.opdrachten = [
		{
			nr: 1,
			achtergrond: 'img/bgs/1.jpg',
			naam: 'Teamwork',
			beschrijving: 'Leer je groep kennen door middel van een Project Start Up.',
			goedgekeurd: true
		},
		{
			nr: 2,
			achtergrond: 'img/bgs/2.jpg',
			naam: 'Gebruikersonderzoek',
			beschrijving: 'Bestudeer je probleemstelling en bepaal een doelgroep.',
			goedgekeurd: true
		},
		{
			nr: 3,
			achtergrond: 'img/bgs/3.jpg',
			naam: 'Meet the people',
			beschrijving: 'Ga naar je doelgroep en onderzoek hun behoeften.',
			goedgekeurd: true
		},
		{
			nr: 4,
			achtergrond: 'img/bgs/4.jpg',
			naam: 'What\'s the problem?',
			beschrijving: 'Is de gestelde probleemstelling ook echt het probleem? Ga na of je probleemstelling nog klopt en pas hem aan.',
			goedgekeurd: true
		},
		{
			nr: 5,
			achtergrond: 'img/bgs/5.jpg',
			naam: 'Divergeren',
			beschrijving: 'Verzamel inspitatie uit onverwachte hoeken. Gebruik de divergatiemethoden.',
			goedgekeurd: true
		},
		{
			nr: 6,
			achtergrond: 'img/bgs/6.jpg',
			naam: 'Survivor',
			beschrijving: 'Kies het beste idee aan de hand van één of meerdere convergatiemethodes.',
			goedgekeurd: true
		},
		{
			nr: 7,
			achtergrond: 'img/bgs/7.jpg',
			naam: 'Build, test, repeat',
			beschrijving: 'Maak je eerste versie van het idee, test het en maak één of meerdere verbeterslagen.'
		},
		{
			nr: 8,
			achtergrond: 'img/bgs/8.jpg',
			naam: 'Eindpresentatie',
			beschrijving: 'Overtuig de jury dat jullie het gouden ei hebben gevonden.'
		}
	];

	$scope.nextOpdracht = function () {
		$('html,body').stop(true).animate({
			scrollTop: Math.ceil((document.body.scrollTop + 1) / $('.page').height()) * $('.page').height()
		}, 1000, 'swing');
	};
});
app.controller('groepsgenoten', function ($scope) {
	$scope.$parent.activePage = 'groepsgenoten';

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

	$scope.applyScrollbar = function () {
		// Wacht op de eerstvolgende frame: dan is pas de daadwerkelijke grote bekend
		setTimeout(function () {
			$('.groepsgenoten .content').scrollator({
				zIndex: '2'
			});
		}, 0);
		$scope.$on('$destroy', function () {
			$('.groepsgenoten .content').data('scrollator').destroy();
		});
	};
});
app.controller('planning', function ($scope, $location) {
	$scope.$parent.activePage = 'planning';

	//TODO: Implement
});
app.controller('documenten', function ($scope, $location) {
	$scope.$parent.activePage = 'documenten';

	//TODO: Implement
});
app.controller('contact', function ($scope, $location) {
	$scope.$parent.activePage = 'contact';

	//TODO: Implement
});
app.controller('chat', function ($scope) {
	$scope.gesprekken = [
		{
			naam: 'Milou Timmerman',
			online: true,
			closed: true,
			berichten: [
				{
					zender: 'Milou Timmerman',
					zenderFoto: 'img/demilou.jpg',
					bericht: 'Zullen we vandaag aan ons project werken?'
				}
			]
		}
	];

	$scope.sendMessage = function (e) {
		if (e.keyCode == 13) {
			this.gesprek.berichten.push({
				zender: 'Yvonne Geraats',
				zenderFoto: 'img/hethoofd.jpg',
				bericht: e.target.value
			});
			e.target.value = '';
			e.stopPropagation();
			e.preventDefault();
		}
	};

	$scope.scrollDown = function () {
		$('.chat-box .content').each(function () {
			this.scrollTop = this.scrollHeight + 999;
		});
	};

	$scope.users = [
		{
			naam: 'Yvonne Geraats',
			opleiding: 'Geneeskunde',
			foto: 'img/hethoofd.jpg',
			online: true
		},
		{
			naam: 'Coen Calkhoven',
			opleiding: 'Biomedische Wetenschappen',
			foto: 'img/hetcoen.jpg',
			online: true
		},
		{
			naam: 'Johan Vermeer',
			opleiding: 'Geneeskunde',
			foto: 'img/isdwayne.jpg',
			online: true
		},
		{
			naam: 'Anne Groot',
			opleiding: 'Biomedische Wetenschappen',
			foto: 'img/demilou.jpg',
			online: true
		},
		{
			naam: 'Suzan Roden',
			opleiding: 'Geneeskunde',
			foto: 'img/hetcoen.jpg',
			online: true
		},
		{
			naam: 'Jan Veenema',
			opleiding: 'Geneeskunde',
			foto: 'img/isdwayne.jpg',
			online: true
		},
		{
			naam: 'Carmen Gerritsen',
			opleiding: 'Geneeskunde',
			foto: 'img/demilou.jpg',
			online: true
		},
		{
			naam: 'Martijn Hols',
			opleiding: 'Biomedische Wetenschappen',
			foto: 'img/ik.jpg',
			online: true
		},
		{
			naam: 'Hans Mathijssen',
			opleiding: 'Biomedische Wetenschappen',
			foto: 'img/isdwayne.jpg',
			online: false
		}
	];

	$scope.applyScrollbar = function () {
		// Wacht op de eerstvolgende frame: dan is pas de daadwerkelijke grote bekend
		setTimeout(function () {
			$('.chat-menu .users').scrollator({
				zIndex: '2'
			});
		}, 0);
		$scope.$on('$destroy', function () {
			$('.chat-menu .users').scrollator('destroy');
		});
	};
});

app.filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
});

app.directive('repeatDone', function() {
	return function(scope, element, attrs) {
		if (scope.$last) { // all are rendered
			scope.$eval(attrs.repeatDone);
		}
	}
});
