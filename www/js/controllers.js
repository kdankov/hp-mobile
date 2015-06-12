angular.module('hp.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('MapCtrl', function($scope, $ionicLoading) {

	$scope.showSearch = function() {
		console.log('aaa');
		this.className += 'activated';
		var searchbox = document.getElementById('pac-input');

		if (searchbox.className.search("active") >= 0) {
			searchbox.className = 'controls';
		}
		else {
			searchbox.className += ' active';
		}
	}

	$scope.mapCreated = function(map) {
		$scope.map = map;
	};

	$scope.centerOnMe = function () {
		// console.log("Centering");
		if (!$scope.map) { return; }

		$ionicLoading.show({ content: 'Getting current location...', });

		navigator.geolocation.getCurrentPosition(function (pos) {
			// console.log('Got pos', pos);
			$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			$scope.map.setZoom(16);

			new google.maps.Marker({
				position: $scope.map.getCenter(),
				icon: {
					path: google.maps.SymbolPath.CIRCLE,
					fillColor: '#00CC00',
					fillOpacity: 0.8,
					strokeColor: '#009900',
					strokeOpacity: 0.1,
					scale: 10
				},
				draggable: false,
				map: $scope.map
			});

			$ionicLoading.hide();
		}, function (error) {
			alert('Unable to get location: ' + error.message);
		});
	};
})

.controller('PinCtrl', function($scope, $ionicLoading, $stateParams, pins) {

	$ionicLoading.show();
	pins.getDetails($stateParams.pinId).then(function(){
		$ionicLoading.hide();
		$scope.pin = pins.details;
		$scope.tags = pins.details.tags;
		$scope.pinDisplayClass = pins.details.display.class;
	});

})

.controller('CollectionsCtrl', function($scope, $ionicLoading, projects) {

	//$scope.$on('$ionicView.enter', function(e) { });

	$ionicLoading.show();
	projects.getList().then(function(){
		$ionicLoading.hide();
		$scope.collections = projects.list;
	});

	// $scope.doRefresh = function() {
	// 	$scope.$broadcast('scroll.refreshComplete');
	// };
})

.controller('CollectionDetailsCtrl', function($scope, $ionicLoading, $stateParams, projects, gallery) {

	$ionicLoading.show();

	projects.getDetails($stateParams.collectionSlug).then(function(){
		$ionicLoading.hide();
		$scope.collection = projects.details;
		$scope.users = $scope.collection.owners;
	});

	gallery.getCards($stateParams.collectionSlug).then(function(){
		$scope.cards = gallery.cards;
		console.log($scope.cards);
	});
})

.controller('PinsCtrl', function($scope) {

})

.controller('PinDetailsCtrl', function($scope) {

})

.controller('ToursCtrl', function($scope) {

})

.controller('TourDetailsCtrl', function($scope) {

})

.controller('PeopleCtrl', function($scope) {

})

.controller('PersonDetailsCtrl', function($scope) {

})

.controller('UploadCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope) {

})

.controller('CommunityCtrl', function($scope) {

})

.controller('HelpCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {

});
