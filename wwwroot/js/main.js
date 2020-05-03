const mapZoomThreshold = 7;


$(function () {
    console.log(locations)


    //let searchedTown = towns.find(t => t.name == searchTerm);

    //let allAttractions = towns.map(t => t.attractions).find;

    //allAttractions.find

    /* for( let town of towns){
        for( let attraction of town.attractions){
        
        }
    } */

    // Create Map and center to Ireland
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: mapZoomThreshold,
        center: new google.maps.LatLng(53.350140, -6.266155),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    //

    /* var marker, i;
    var icon = {
        url: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png', // url
        scaledSize: new google.maps.Size(50, 50), // size
    }; */

    // Create Markers for cities
    for (let location of locations) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.long),
            map: map,
            icon: {
                url: location.iconImage,
                scaledSize: new google.maps.Size(50, 50)
            }
        });

        location.marker = marker;

        // On click event listener to zoom and center on selected city
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                map.setZoom(9);
                map.setCenter(new google.maps.LatLng(location.lat, location.long),)
                console.log(location);
            }
        })(marker));
        console.log("hello")

        //Create Markers for attractions
        for (let attraction of location.attractions) {
            console.log(attraction.type);
            console.log(attraction.lat);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(attraction.lat, attraction.long),
                map: map,
                icon: {
                    url: attraction.type,
                    scaledSize: new google.maps.Size(25, 25),
                },
                visible: false,
            });

            attraction.marker = marker;

            // Create cards for attractions
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    
                }
            })(marker));
        }
    }

    // On zoom change event listener to change visibility of marker on different zooms
    google.maps.event.addListener(map, 'zoom_changed', function () {
        var zoom = map.getZoom();
        console.log(zoom);
        // iterate over markers and call setVisible
        for (let location of locations) {
            location.marker.setVisible(zoom <= mapZoomThreshold);

            for (let attraction of location.attractions) {
                attraction.marker.setVisible(zoom > mapZoomThreshold);
            }
        }
        
    });
    /* for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: icon
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    } */
});

console.log(locations)
