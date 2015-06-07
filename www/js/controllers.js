angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CollectionsCtrl', function($scope, $ionicLoading, collections) {
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$ionicLoading.show({
		template: 'Loading ...'
	});

	$scope.collections = collections.list;

	collections.ready.then(function(){
		$ionicLoading.hide();
	});
})

.controller('CollectionDetailCtrl', function($scope, $stateParams, collections) {
	$scope.collection = collections.get($stateParams.collectionId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
