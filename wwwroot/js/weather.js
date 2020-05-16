var weatherTowns = [];

var weatherapiKey = "68e04e7f0bmsh88a196efbca07adp153910jsn219512fc1d16";

weatherTowns.push(towns.find(t => t.name.toLowerCase() == "belfast"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "dublin"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "galway"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "cork"));

weatherTowns.forEach(town => {


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://weatherbit-v1-mashape.p.rapidapi.com/current?key=${weatherapiKey}lang=en&lon=${town.long}&lat=${town.lat}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "x-rapidapi-key": weatherapiKey
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});

var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=new%20york",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "68e04e7f0bmsh88a196efbca07adp153910jsn219512fc1d16"
    }
}

$.ajax(settings2).done(function (response) {
    console.log(response);
});