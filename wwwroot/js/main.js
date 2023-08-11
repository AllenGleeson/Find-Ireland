//
/* Variables for starting map zoom level and position on Ireland */
//
const mapZoomThreshold = 7;
const irelandLat = 53.350140;
const irelandLong = -6.266155;
let itinerary = [];
var map;
var errorOccurred = false;

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

		createTownMarkers(town);
		// Pass the town into createAttractionMarkers to create markers for attractions near that town
		createAttractionMarkers(town);

	}

	google.maps.event.addListener(map, 'zoom_changed', function () {
		var zoom = map.getZoom();
		// iterate over markers and call setVisible
		 for (let town of towns) {
			 town.townMarker.setVisible(zoom <= mapZoomThreshold);

			 for (let attraction of town.attractionMarkers) {
				 attraction.setVisible(zoom > mapZoomThreshold);
			 }
		 }


	});


});

// Create the town markers and event listeners
function createTownMarkers(town) {
	town.townMarker = new google.maps.Marker({
		position: new google.maps.LatLng(town.lat, town.long),
		map: map,
		icon: {
			url: town.iconImage,
			scaledSize: new google.maps.Size(50, 50)
		}
	});

	// Event listener to zoom in to selected town marker, then display that towns nearby attractions as cards
	// and also hide the cards that are not nearby.
	google.maps.event.addListener(town.townMarker, 'click', (function () {
		return function () {
			if (map.getZoom() < 9) {
				map.setZoom(9);
			}
			showCityInfo(town);
		}
	})(town.townMarker));
}
//
/* Create the markers for each attraction near the town it's checking */
//

function createAttractionMarkers(town) {
	// Request will search each town for any nearby 'Attraction'
	var request = {
		location: new google.maps.LatLng(town.lat, town.long),
		radius: 50000,
		query: 'Attraction'
	};
	service = new google.maps.places.PlacesService(map);
	service.textSearch(request, function (attractions) {
		for (const attraction of attractions) {

			//
			//This will be to set a marker icon, depending on the type of attraction
			//

			let iconUrl = "./wwwroot/images/icons/markers/modernmonument.png";
			
			for (const attrType of attraction.types) {
				for (var property in locationType) {
					if (attrType == locationType[property].name) {
						
						iconUrl = locationType[property].iconUrl;
					}
				  }
			}

			// On zoom change event listener to change visibility of marker on different zooms
			searchWikipedia(attraction, iconUrl, town); // This would call getIntro();
		}
	});

	if (errorOccurred == true) {
		alert("Couldn't get location data");
	}
}

function erroHandler(errorData) {
	errorOccurred = true;
}

function searchWikipedia(attraction, iconUrl, town) {
	// Find a description from wikipedia and create a attraction card
	$.ajax({
		// This will search wikipedia for the pages that match the attraction
		url: `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${attraction.name}&namespace=0&format=json`,
		error: erroHandler,
		//async: false
		//url: `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${attraction.name}`
	}).done(function (response) {
		if (response[1].length) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(attraction.geometry.location.lat(), attraction.geometry.location.lng()),
				map: map,
				icon: {
					url: iconUrl,
					scaledSize: new google.maps.Size(25, 25),
				},
				nearestTown: town.name
			});

			google.maps.event.addListener(marker, 'click', (function () {
				return function () {
					if (map.getZoom() < 9) {
						map.setZoom(9);
					}
					showCityInfo(town);
				}
			})(marker));

			marker.setVisible(false);

			town.attractionMarkers.push(marker);

			getIntroductions(response, attraction, town);
		}
	});
};

function getIntroductions(response, attraction, town) {
	$.ajax({
		// This query will use the pages it finds above and take the intro for that page as a description
		url: `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&titles=${response[3][0].split('wiki/').pop()}&prop=extracts&exintro&explaintext`,
		error: erroHandler,
		//async: false
	}).done(function (attractionDescription) {
		page = attractionDescription['query']['pages'];
		desc = Object.keys(page)[0];
		if (page[desc].extract.length > 0) {
			createAttractionCard(town, attraction, page[desc].extract);
		}
	});
};

//Create cards
function createAttractionCard(town, attraction, attractionDescription) {
	let attractionCardContainer = document.getElementsByClassName("card-columns");
	let card = document.createElement('div');
	card.className = `card attraction ${town.name} shadow cursor-pointer`;

	let cardImage = document.createElement('img');
    
    cardImage.className = "card-img-top";
    try {
      cardImage.setAttribute("src", attraction.photos[0].getUrl());
    }
    catch(err) {
      cardImage.setAttribute("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0IDg4IDQ4QCA4NEA8NDQ4NDw8IDQgNFREYFhURExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMtNyg5LisBCgoKDQ0NDw0NFysdExkrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALgBEgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QAMRABAAECAgkDBAIBBQAAAAAAAAECAxMxBBESFCEzUmGhUXHBIkGBkWKx0QUjMkOi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7ZXcmJ1I4s9nLuaALMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexiz2VgLMWexTcmZ1K3ac4BqHAFF3NBO7mgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlRnCKVGcA0jgCi7mgndzQAAAAAAAABCu9TRwqmKZR3m31QzaRTFd6mmeMao+f8L9ztdPmQS3m31R5N5t9UI7nb6fMm52+nzIiW82+qPJvNvqhHdLfT5k3O30+ZBLebfVBvNvqjyjudvp8ybpb6fMglvNvqg3m31R5R3O10+ZNzt9PmQS3m31R5N5t9UeUd0t9PmTdLfT5kEt5t9UeXab9FU7MVRM+iG6WunzKiq1TbvURTGoG4AUAAAAAASozhF2nOAagAZruaKd3NAAAAAAAAAGO9z6faPlsY7vPp9o+WwAAAAAAByqqKeM8Pd15OlXpuVT6RwiAejGk0Tw2oWxOvu8Nr0G/NNWHPGJy7A9Fjvc6hsY7/PoBsAAAAAAAAdpzhx2jOAagAZ7uaCd3NAAAAAAAAAGO7z6faPlsY73Pp9o+WwAAAAAACY1vErpmmZj01vbZ9J0WLv1R9NXiQeWu0Smaq6e3FZGgV684/ts0fR4sx6zOc+oLmO9zqGxjvc6gGwAAAAAAAB2nOHEqM4BoHQGe9mgldzRAAAAAAAABjvc+n2j5bGO7z6faPlsAAAELtym3G1VOr5V2tKouTqjXHvw1gvAAHJmI4zw8OxOvjHEAABjvc6hsY7/ADqAbAAAAAAAAEqM4RSozgGgdAZ7uaCd3NAAAAAAAAAGO7z6faPlsY7vPp9o+WwBC9di1G1P4j7zJeuxajan8R6vJvXZuztT+I9AL12bs7U/iPRDIBHo6JpW39FXCftPq1VVbMTM/bP7vE7vQ0TSdv6Ks/t/IGTSL83p9IjKEtF0mbU6p40+nou0zRdX+5THvDED26K4rjajjEuvJ0bSJtT60znHp3erRVFcbUcYkV1jvc622Md/nUA2AAAAAAAAJUZwilRnANI4Aou5oJ3c0AAAAAAAAAY73Pp9o+Wm9di1G1P4j1Zr3Pp9o+VH+oTM16vSOHYFV+7N2dqfxHorAQAAI4ccgB6OiaVt/RVn9v5Qr0zRf+ymPeGLXq7PR0PStv6Ks/XqB5y7RtImzPrTOcejRpeiZ3KPzDCD26aoqjajjDJe51DPoN2aaoozift6NF7nUA2ACgAAAAACVGcIpUZwDQACi7mgndzQAAAAAAAABjvc+n2j5Z9P5k+y+/VFN6mZnVERHGfyldizcnamqNfuDzhuw7HV5MOx1eRGEbsOx1eTDsdXkGEbsPR+qP2Yej9UfsGEidXHJuw9H6o/Zh6P1R+wT0PScT6KuFUf+kNM0XOun8xHwRbsRx2ojV/LJpjSLccNqAebovMp9/013udQlqs7WJFUROeauuuK71E0ztA3ACgAAAAADtGcOO05wDSACi7nKCd3NAAAAAAAAAFVyxRcnaqjanJHdLfT5leAo3S30+ZN0t9PmV4CjdLfT5k3S30+ZXgKN0t9PmTdLfT5leAo3S30+ZN0t9PmV4CjdLfT5k3O30/2vAUbnb6f7do0aiidqKdUx7rgAAAAAAAAB2nOHEqM4BpHAGe7/wAkUruaIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVGcIpUZwDSOAKrluZnXCOFUAGFUYVQAYVRhVABhVGFUAGFUYVQAYVRhVABhyYcgBhVGFUAGFUYVQAYVRhVABhVGHIAYcmHIAYVRhVABhVGFUAGFUYVQAYUmHIAYVTtNuYnWALgAf/9k=");
    }
    
	cardImage.setAttribute("alt", attraction.name);

	let cardBody = document.createElement('div');
	cardBody.className = 'card-body';

	let title = document.createElement('h5');
	title.innerText = attraction.name;
	title.className = 'card-title text-center';

	// Use the response from wikipedia to create the description
	let description = document.createElement('p');
	description.innerText = attractionDescription;
	description.className = 'card-text';

	cardBody.appendChild(cardImage);
	cardBody.appendChild(title);
	cardBody.appendChild(description);
	card.appendChild(cardBody);
	attractionCardContainer[0].appendChild(card);
	// Will create all cards and then hide others on start up
	$(".card").hide();
}

// On click event for each city button. Will do the same thing as clicking on the city's image on the map
$(".city-button").click(function () {
	$('.city-button').removeClass("active");
	$(this).addClass("active");

	var townName = $(this).attr("townName");
	var town = towns.find(t => t.name == townName);
	showCityInfo(town);
	$(".card").hide();
	$("." + town.name).show();
});

// Set the map to the selected city and show cards for that city
function showCityInfo(town) {
	map.setCenter(new google.maps.LatLng(town.lat, town.long));
	if (map.getZoom() < 9) {
		map.setZoom(9);
	}
	$(".card").hide();
	$("." + town.name).show();
	setCityDesription(town);
}

// Create the city description above the cards
function setCityDesription(town) {
	// Remove the city container if it already exists so there arent multiple city descriptions at the same time
	$('.cityContainer').remove();

	let cityInfoContainer = document.getElementsByClassName("cityInfo");
	cityInfoContainer.className = "shadow cursor-pointer p-4";

	let cityContainer = document.createElement('div');
	cityContainer.className = "cityContainer";

	let cityName = document.createElement('h2');
	cityName.className = `text-center`;
	cityName.innerText = town.name;

	let cityDescription = document.createElement('p');
	cityDescription.className = `p-2`;
	cityDescription.innerText = town.description;


	cityContainer.appendChild(cityName);
	cityContainer.appendChild(cityDescription);
	cityInfoContainer[0].appendChild(cityContainer);
}