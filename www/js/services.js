angular.module('starter.services', [])

.factory('collections', function($http, $q) {

	var collections = {};

	collections.list = [];

	collections.get = function() {
		return $http.get('www.localhost.com:8080/en/api/projects/listing.json?limit=24&page=1').
		//return $http.get('http://v624-beta-1.historypin-hrd.appspot.com/en/api/projects/listing.json?limit=24&page=1').
		//return $http.get('http://jsonplaceholder.typicode.com/posts').
		then(function(response){
			collections.list.push(response.data);
			console.log(response.data);
		});
	}
	
	collections.ready = $q.all([
		collections.get()
	]);

	return collections;
});
	//get: function(chatId) {
	//for (var i = 0; i < chats.length; i++) {
	//if (chats[i].id === parseInt(chatId)) {
	//return chats[i];
	//}
	//}
	//return null;
	//}

