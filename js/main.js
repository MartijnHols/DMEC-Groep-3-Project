var app = angular.module('expeditie', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/iets', {
		templateUrl: 'templates/iets.html',
		controller: 'iets'
	}).otherwise({
		templateUrl: 'templates/home/index.html',
		controller: 'home'
	});
}]);

app.controller('main', function ($scope) {
	$scope.who = 'World';
})
	.controller('home', function ($scope) {
		$scope.articles = [
			{
				title: 'Newest HPV Vaccine Protects Against 9 Strains',
				text: '<p>A vaccine to prevent five additional strains of human papillomavirus (HPV) than the current quadrivalent (4-strain) HPV vaccine was <a href="http://www.fda.gov/NewsEvents/Newsroom/PressAnnouncements/ucm426485.htm">approved yesterday</a> by Food and Drug Administration.</p>\
<p>Gardasil 9, manufactured by Merck <a href="/companies/sharp/" class="exit_trigger_set">Sharp</a> <span class="quotecard_hook" data-ticker="null" data-exchange="null" data-type="organization" data-naturalid="fred/company/3857" data-quotes-closing="0.0" data-quotes-now="0.0"><span class="wrapper"><a href="/companies/sharp/" class="exit_trigger_set">Sharp</a></span></span> &amp; Dohme Corp, was approved for females aged 9 to 26 and males aged 9 to 15. The additional strains according to the FDA, can potentially prevent up to 90 percent of cervical, vulvar, vaginal and anal cancers.</p>\
<p>HPV is a viral infection most commonly transmitted through sexual contact, though <a href="http://www.upi.com/Health_News/2014/02/12/HPV-can-be-transmitted-non-sexually/UPI-11001392256174/">non-sexual transmissions</a> can occur as well. Although approximately 100 strains of the virus exist, only a handful of strains are responsible for warts and cancer, including <a href="http://www.hopkinsmedicine.org/kimmel_cancer_center/centers/head_neck/HPV/">head, throat and neck cancer</a>.</p>\
<div id="attachment_214" class="wp-caption alignnone" style="width: 650px">\
<img class="size-full wp-image-214" src="http://blogs-images.forbes.com/tarahaelle/files/2014/12/teensshots.jpg" alt="The newest HPV vaccine, Gardasil 9, has been approved by the FDA for females aged 9 to 26 and males aged 9 to 15. Photo by Lars Kristian Flem">\
<p class="wp-caption-text">The newest HPV vaccine, Gardasil 9, has been approved by the FDA for females aged 9 to 26 and males aged 9 to 15. Photo by Lars Kristian Flem</p>\
</div>\
<p>The current <a href="http://www.gardasil.com/about-gardasil/who-should-get-vaccinated/">Gardasil vaccine</a>, one of the two HPV vaccines <a href="http://www.cdc.gov/vaccines/hcp/acip-recs/vacc-specific/hpv.html">recommended for both boys and girls</a> by the CDC’s Advisory Committee on Immunization Practices (ACIP), protects against types 6, 11, 16 and 18. The other vaccine, <a href="http://www.cervarix.ca/">Cervarix</a>, manufactured by <a href="/companies/glaxosmithkline/" class="exit_trigger_set">GlaxoSmithKline</a> <span class="quotecard_hook" data-ticker="null" data-exchange="null" data-type="organization" data-naturalid="fred/company/1797" data-quotes-closing="0.0" data-quotes-now="0.0"><span class="wrapper"><a href="/companies/glaxosmithkline/" class="exit_trigger_set">GlaxoSmithKline</a></span></span>, protects against <a href="http://www.fda.gov/BiologicsBloodVaccines/Vaccines/ApprovedProducts/ucm186957.htm">types 16 and 18</a>, which are responsible for about <a href="http://www.cancer.gov/cancertopics/factsheet/Risk/HPV">70 percent of all cervical cancer</a> cases.</p>\
<p>In addition to the four covered by the current Gardasil vaccine, Gardasil 9 covers types 31, 33, 45, 52 and 58, which are responsible for about 20 percent of cervical cancers. The FDA approval is based on data from a randomized, controlled study in the U.S. involving approximately 14,000 females aged 16 to 26, all testing negative for HPV at the start of the study.</p>\
<p>The trial found the new vaccine to be 97 percent effective in preventing the additional five strains and equally effective to the current Gardasil in preventing the original four strains, based on participants’ antibody responses. An additional 1,200 males and 2,800 females, aged 9 to 15, showed similar antibody responses as the older participants in the trial and should therefore experience similar effectiveness from the new vaccine.</p>\
<p>Safety data on Gardasil 9 is based on adverse reactions tracked in approximately 13,000 males and females. Headaches and swelling, redness and pain at the injection site were the ones most commonly reported.</p>\
<p>Despite the <a href="http://www.redwineandapplesauce.com/2013/06/20/hpv-vaccine-boasts-a-seriously-awesome-success-story/">effectiveness of the vaccine</a>, concerns about both current HPV vaccines have centered on their <a href="http://www.skepticalraptor.com/skepticalraptorblog.php/large-study-supports-safety-gardasil-hpv-vaccine/">safety</a>, <a href="http://www.redwineandapplesauce.com/2013/12/12/katie-couric-backtracks-will-she-now-walk-the-walk-with-her-cdc-guest-tomorrow/">often</a> <a href="http://www.redwineandapplesauce.com/2013/12/05/oh-katie-couric-let-us-count-the-ways-you-screwed-up-hpv-vaccine-coverage/">irresponsibly perpetuated</a> in the <a href="http://www.redwineandapplesauce.com/2013/12/06/more-on-katie-couric-who-doubles-down-even-as-critical-coverage-grows/">media</a>. But these <a href="http://www.skepticalraptor.com/skepticalraptorblog.php/massive-study-supports-safety-hpv-vaccine/">concerns are unfounded</a> as multiple <a href="http://www.ncbi.nlm.nih.gov/pubmed/23027469">studies</a> have <a href="http://www.skepticalraptor.com/skepticalraptorblog.php/massive-study-supports-safety-hpv-vaccine/">repeatedly shown</a> the <a href="http://www.redwineandapplesauce.com/2014/07/08/nope-the-hpv-vaccine-doesnt-cause-blood-clots/">vaccine’s safety</a>. Other <a href="http://www.skepticalraptor.com/skepticalraptorblog.php/one-stop-shop-science-myth-debunking-gardasil/">misconceptions</a> or <a href="http://www.redwineandapplesauce.com/2013/03/19/despite-hpv-vaccine-effectiveness-and-safety-parent-concerns-persist/">concerns about the HPV vaccine</a> have centered on the worry that the vaccine increases promiscuity, but <a href="http://www.theglobeandmail.com/life/health-and-fitness/health/study-debunks-link-between-hpv-vaccination-and-early-sex/article22012372/">research has also shown</a> otherwise.</p>\
<p>The new Gardasil 9 will not be recommended by the CDC for anyone at least until <a href="http://www.cdc.gov/vaccines/acip/">ACIP meets</a> next.</p>'
			}
		];
	});