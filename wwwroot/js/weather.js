var weatherTowns = [];

weatherTowns.push(towns.find(t => t.name.toLowerCase() == "belfast"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "dublin"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "galway"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "cork"));

weatherTowns.forEach(town => {


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${town.long}&lat=${town.lat}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "x-rapidapi-key": "68e04e7f0bmsh88a196efbca07adp153910jsn219512fc1d16"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});