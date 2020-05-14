//
/* Variables for starting map zoom level and position on Ireland */
//
const mapZoomThreshold = 7;
const irelandLat = 53.350140;
const irelandLong = -6.266155;
let itinerary = [];
var map;

//
/**Create the map and set markers for some towns in Ireland */
//

$(function () {
    // Create the map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: mapZoomThreshold,
        center: new google.maps.LatLng(irelandLat, irelandLong),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Create the town markers
    for (let town of towns) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(town.lat, town.long),
            map: map,
            icon: {
                url: town.iconImage,
                scaledSize: new google.maps.Size(50, 50)
            }
        });

        // Event listener to zoom in to selected town marker
        google.maps.event.addListener(marker, 'click', (function () {
            return function () {
                map.setZoom(9);
                map.setCenter(new google.maps.LatLng(town.lat, town.long))
            }
        })(marker));

        // Pass the town into createAttractionMarkers to create markers for attractions near that town
        createAttractionMarkers(town);
    }
});

//
/* Create the markers for each attraction near the town it's checking */
//

function createAttractionMarkers(town) {
    var request = {
        location: new google.maps.LatLng(town.lat, town.long),
        radius: 50000,
        query: 'Attraction'
    };
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, function (attractions) {
        for (const attraction of attractions) {
            console.log(attraction);
            let iconUrl = "./wwwroot/images/icons/modernmonument.png";

            for (const type of locationType) {
                if (attraction.types.find(t => t == type.name)) {
                    iconUrl = type.iconUrl;
                }
            }


            marker = new google.maps.Marker({
                position: new google.maps.LatLng(attraction.geometry.location.lat(), attraction.geometry.location.lng()),
                map: map,
                icon: {
                    url: iconUrl,
                    scaledSize: new google.maps.Size(25, 25),
                },
                nearestTown: town.name
            });

            google.maps.event.addListener(marker, 'on_click', function () {
                var zoom = map.getZoom();

                console.log(attractions);
        
            });

            // On zoom change event listener to change visibility of marker on different zooms
            /* google.maps.event.addListener(map, 'zoom_changed', function () {
                var zoom = map.getZoom();
                // iterate over markers and call setVisible
                for (let location of locations) {
                    location.marker.setVisible(zoom <= mapZoomThreshold);
        
                    for (let attraction of location.attractions) {
                        attraction.marker.setVisible(zoom > mapZoomThreshold);
                    }
                }
        
            }); */

            // Add the location to a variable in the marker to keep track of which is the nearest town
            createAttractionCard(attraction);
        }
    });
}

//Create cards
function createAttractionCard(attraction) {
    let attractionCardContainer = document.getElementsByClassName("card-row");
    let card = document.createElement('div');
    card.className = 'card attraction shadow cursor-pointer col-sm-3 d-none';

    let cardImage = document.createElement('div');
    cardImage.className = "card-img-top";
    cardImage.setAttribute("src", attraction.image);
    cardImage.setAttribute("alt", attraction.name);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.innerText = attraction.name;
    title.className = 'card-title text-center';

    let description = document.createElement('p');
    description.innerText = attraction.description;
    description.className = 'card-text';

    let itineraryBtn = document.createElement('button');
    itineraryBtn.innerText = "Add to itinerary";
    itineraryBtn.className = 'btn btn-primary';
    itineraryBtn.addEventListener("click", function () {
        console.log("Added to itinerary", attraction.name);
    });

    cardBody.appendChild(cardImage);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(itineraryBtn);
    card.appendChild(cardBody);
    attractionCardContainer[0].appendChild(card);

}