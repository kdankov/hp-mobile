// var styles = [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];

angular.module('hp.directives', [])

.directive('map', function() {
	return {
		restrict: 'E',
		scope: {
			onCreate: '&'
		},
		link: function ($scope, $element, $attr) {
			function initialize() {

				var markers = [];
				var mapOptions = {
					center: new google.maps.LatLng(51.5286416,-0.1015987,11),
					zoom: 5,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					// styles: styles,
					disableDefaultUI: true
				};

				var map = new google.maps.Map($element[0], mapOptions);
				
				// Create the search box and link it to the UI element.
				var input = (document.getElementById('pac-input'));
				var locateBtn = (document.getElementById('locate-me'));

				map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
				map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locateBtn);

				var searchBox = new google.maps.places.SearchBox((input));

				google.maps.event.addListener(searchBox, 'places_changed', function() {
					var places = searchBox.getPlaces();
					if (places.length == 0) { return; }
					var place = places[0];

					if(place.geometry.viewport) {
						map.fitBounds(place.geometry.viewport);
					}
					else
					{
						map.setCenter(place.geometry.location);
						map.setZoom(17);
					}
				});
				
				$scope.onCreate({map: map});

				// Stop the side bar from dragging when mousedown/tapdown on the map
				google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
					e.preventDefault();
					return false;
				});
			}

			if (document.readyState === "complete") {
				initialize();
			} else {
				google.maps.event.addDomListener(window, 'load', initialize);
			}
		}
	}
})

.directive('disableTap', function($timeout) {
  return {
    link: function() {
      $timeout(function() {
        // Find google places div
        _.findIndex(angular.element(document.querySelectorAll('.pac-container')), function(container) {
          // disable ionic data tab
          container.setAttribute('data-tap-disabled', 'true');
          // leave input field if google-address-entry is selected
          container.onclick = function() {
            document.getElementById('autocomplete').blur();
          };
        });
      },500);
    }
  };
});
;