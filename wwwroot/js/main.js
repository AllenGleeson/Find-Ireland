
$(function() {
    console.log(locations)


    //let searchedTown = towns.find(t => t.name == searchTerm);

    //let allAttractions = towns.map(t => t.attractions).find;

    //allAttractions.find

    /* for( let town of towns){
        for( let attraction of town.attractions){
        
        }
    } */

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: new google.maps.LatLng(53.350140, -6.266155),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    /* var marker, i;
    var icon = {
        url: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png', // url
        scaledSize: new google.maps.Size(50, 50), // size
    }; */
    
    for (let location of locations) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.long),
            map: map,
            icon: {
                url: location.iconImage,
                scaledSize: new google.maps.Size(50, 50)
            }
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(location.name);
                infowindow.open(map, marker);
            }
        })(marker));
        console.log("hello")
        for (let attraction of location.attractions) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(attraction.lat, attraction.long),
                map: map,
                icon: {url:attraction.type,scaledSize: new google.maps.Size(50, 50),},
                zoom: 6
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(location.name);
                    infowindow.open(map, marker);
                }
            })(marker));
        }
    }

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
    