
// var base = 'http://www.localhost.com:8080';
var base = 'http://v624-mobile.historypin-hrd.appspot.com';
var hpapi = {}

hpapi.getUrlPinDetails = function(id){
	if(id) {
		return base + '/en/api/pin/get.json?id=' + id;
	}else {
		console.log('getUrlPinDetails missing Pin ID');
	}
}

hpapi.getUrlProjectListing = function(){
	if(true) {
		return base + '/en/api/projects/listing.json?limit=24&page=4&sort=-recent';
	}else {
		console.log('getUrlProjectListing missing slug');
	}
}

hpapi.getUrlProjectDetails = function(slug){
	if(slug) {
		return base + '/en/api/' + slug + '/projects/get.json';
	}else {
		console.log('getUrlProjectDetails missing slug');
	}
}

hpapi.getUrlProjectGallery = function(slug){
	if(slug) {
		return base + '/en/api/' + slug + '/pin/get_gallery.json';
	}else {
		console.log('getUrlProjectGallery missing slug');
	}
}

angular.module('hp.services', [])

//http://www.localhost.com:8080/en/api/pin/listing.json?limit=24&page=1
//http://www.localhost.com:8080/en/api/pin/listing.json?limit=6&page=1&user=62461
//http://www.localhost.com:8080/en/api/user/get.json?id=62461
//http://www.localhost.com:8080/en/api/user/listing.json?limit=24&page=1
//http://www.localhost.com:8080/en/api/projects/listing.json?limit=24&page=1
//http://www.localhost.com:8080/en/api/hlf/oreo/pin/get_gallery.json
//http://www.localhost.com:8080/en/api/hlf/oreo/projects/get.json

.factory('projects', function($http, $q) {

	var projects = {};

	projects.list = [];
	projects.details = {};

	projects.getList = function() {
		return $http.get(hpapi.getUrlProjectListing()).then(function(response){
			projects.list = response.data.results;
		});
	}

	projects.getDetails = function(slug) {
		return $http.get(hpapi.getUrlProjectDetails(slug)).then(function(response){
			projects.details = response.data;
		});
	}

	return projects;
})

.factory('pins', function($http, $q) {

	var pins = {};

	pins.list = [];
	pins.details = {};

	pins.getList = function() {
		return $http.get('http://www.localhost.com:8080/en/api/projects/listing.json?limit=24&page=1').then(function(response){
			pins.list = response.data.results;
		});
	}

	pins.getDetails = function(slug) {
		return $http.get(hpapi.getUrlPinDetails(slug)).then(function(response){
			pins.details = response.data;
		});
	}

	return pins;
})

.factory('gallery', function($http, $q) {

	var gallery = {};

	gallery.cards = [];

	gallery.getCards = function(slug) {
		return $http.get(hpapi.getUrlProjectGallery(slug)).then(function(response){
			gallery.cards = response.data.results;
		});
	}

	return gallery;
});