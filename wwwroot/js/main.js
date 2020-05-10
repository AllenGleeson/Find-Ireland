const mapZoomThreshold = 7;
const irelandLat = 53.350140;
const irelandLong = -6.266155;
let itinerary = [];


$(function () {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: mapZoomThreshold,
        center: new google.maps.LatLng(irelandLat, irelandLong),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (let town of towns) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(town.lat, town.long),
            map: map,
            icon: {
                url: location.iconImage,
                scaledSize: new google.maps.Size(50, 50)
            }
        });

        google.maps.event.addListener(marker, 'click', (function () {
            return function () {
                map.setZoom(9);
                map.setCenter(new google.maps.LatLng(town.lat, town.long))
            }
        })(marker));


        var request = {
            location: new google.maps.LatLng(town.lat, town.long),
            radius: 50000,
            query: 'Attraction'
        };
        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, function (attractions) {
            console.log(attraction);
            for (const attraction of attractions) {
                let iconUrl = "./wwwroot/images/icons/modernmonument.png";
                if(attraction.types.find(t => t == LocationType.POINT_OF_INTEREST)){
                    iconUrl = "./wwwroot/images/icons/church-2.png";
                }

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(attraction.geomotry.location.lat, attraction.geomotry.location.lng),
                    map: map,
                    icon: {
                        url: iconUrl,
                        scaledSize: new google.maps.Size(25, 25),
                    },
                    visible: false,
                });
                createAttractionCard(attraction);
            }
        });
    }






    let attractionCardContainer = document.getElementsByClassName("card-row");

    //let searchedTown = towns.find(t => t.name == searchTerm);

    //let allAttractions = towns.map(t => t.attractions).find;

    // Create Map and center to Ireland


    // Create Markers for cities
    /* for (let location of locations) {
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
        google.maps.event.addListener(marker, 'click', (function () {
            return function () {
                map.setZoom(9);
                map.setCenter(new google.maps.LatLng(location.lat, location.long))
            }
        })(marker));

        //Create Markers for attractions
        for (let attraction of location.attractions) {
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
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    let attractionCards = $(".card.attraction");

                    for (let card of attractionCards) {
                        let title = $(card).find(".card-title").text();
                        if (location.attractions.find(a => a.name == title)) {
                            $(card).addClass("d-none");
                        } else {
                            $(card).removeClass("d-none");
                        }
                    }
                }
            })(marker));

            createAttractionCard(attraction);
        }
    } */

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

    //Create cards
    function createAttractionCard(attraction) {

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
});