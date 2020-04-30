function initMap() {
  var center = {lat: 53.350140, lng: -6.266155};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: center
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
}

var locations = [
    ['Los Angeles', 34.052235, -118.243683],
    ['Santa Monica', 34.024212, -118.496475],
    ['Redondo Beach', 33.849182, -118.388405],
    ['Newport Beach', 33.628342, -117.927933],
    ['Long Beach', 33.770050, -118.193739]
  ];

var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
    //google.maps.event.addListener(marker, 'click', (function (marker, count) {
    //  return function () {
    //    infowindow.setContent(locations[count][0]);
    //    infowindow.open(map, marker);
    //  }
    //})(marker, count));
  }

function initMap() {
    var locations = [
      ['Limerick', 52.668018, -8.630498, 4],
      ['Galway', 53.270962, -9.062691, 5],
      ['Cork', 51.903614, -8.468399, 3],
      ['Dublin', 53.350140, -6.266155, 2],
      ['Belfast', 54.607868, -5.926437, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: new google.maps.LatLng(53.350140, -6.266155),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}      