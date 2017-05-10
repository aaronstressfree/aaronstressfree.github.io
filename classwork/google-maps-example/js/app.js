// var map;
// function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 40.7128, lng: -74.0059},
  zoom: 8
});
// }

var locations = [
        {
          lat: 40.7484444,
          lng: -73.9878441,
          title: 'Empire State Building'
        },
        {
          lat: 40.7516248,
          lng: -73.9776907,
          title: 'Chrysler Building'
        },
        {
          lat: 40.7339877,
          lng: -73.980817,
          title: 'Flatiron Building',
        },
        {
          lat: 40.7121162,
          lng: -74.0128352,
          title: 'World Trade Center',
        }
        ];

locations.forEach(function(location){
    var marker = new google.maps.Marker({
        position: {
          lat: location.lat,
          lng: location.lng,
        },
        title: location.title,
        map: map
      });
})





// Try HTML5 geolocation.
infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Your location');
            infoWindow.open(map);
            map.setCenter(pos);

          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
