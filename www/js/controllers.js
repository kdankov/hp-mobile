angular.module('hp.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('MapCtrl', function($scope) {

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
