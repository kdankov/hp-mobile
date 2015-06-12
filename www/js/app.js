// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hp', ['ionic', 'hp.controllers', 'hp.services', 'hp.directives'])

.constant('$ionicLoadingConfig', {
  template: '<ion-spinner class="spinner-assertive" icon="ripple"></ion-spinner><br><br>Loading'
})

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleLightContent();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	// Learn more here: https://github.com/angular-ui/ui-router
	$stateProvider

	// Each tab has its own nav history stack:

	.state('dashboard', {
		url: '/dash',
		controller: 'DashCtrl',
		templateUrl: 'templates/dashboard.html'
	})
	
	.state('map', {
		url: '/map',
		controller: 'MapCtrl',
		templateUrl: 'templates/map.html'
	})

	.state('pin-details', {
		url: '/pin/:pinId',
		controller: 'PinCtrl',
		templateUrl: 'templates/pin.html'
	})

	.state('collections', {
		url: '/collections',
		controller: 'CollectionsCtrl',
		templateUrl: 'templates/collections.html'
	})

	.state('collection-details', {
		url: '/collection/:collectionSlug',
		controller: 'CollectionDetailsCtrl',
		templateUrl: 'templates/collection-details.html'
	})

	.state('tours', {
		url: '/tours',
		controller: 'ToursCtrl',
		templateUrl: 'templates/tours.html'
	})

	.state('tour-details', {
		url: '/tours/:tourId',
		controller: 'TourDetailsCtrl',
		templateUrl: 'templates/tour-details.html'
	})

	.state('about', {
		url: '/about',
		controller: 'AboutCtrl',
		templateUrl: 'templates/about.html'
	})

	.state('help', {
		url: '/help',
		controller: 'HelpCtrl',
		templateUrl: 'templates/help.html'
	})

	.state('community', {
		url: '/community',
		controller: 'CommunityCtrl',
		templateUrl: 'templates/community.html'
	})

	.state('upload', {
		url: '/upload',
		controller: 'UploadCtrl',
		templateUrl: 'templates/upload.html'
	})

	.state('people', {
		url: '/people',
		controller: 'PeopleCtrl',
		templateUrl: 'templates/people.html'
	})

	.state('person-details', {
		url: '/people/:personId',
		controller: 'PersonDetailsCtrl',
		templateUrl: 'templates/person-details.html'
	})

	.state('login', {
		url: '/login',
		controller: 'LoginCtrl',
		templateUrl: 'templates/login.html'
	})

	.state('account', {
		url: '/account',
		controller: 'AccountCtrl',
		templateUrl: 'templates/account.html'
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/dash');

});
