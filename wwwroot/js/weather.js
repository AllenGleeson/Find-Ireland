var weatherTowns = [];

var weatherapiKey = "68e04e7f0bmsh88a196efbca07adp153910jsn219512fc1d16";

weatherTowns.push(towns.find(t => t.name.toLowerCase() == "belfast"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "dublin"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "galway"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "cork"));

weatherTowns.forEach(town => {
    $.ajax({
        url: `https://api.weatherbit.io/v2.0/current?lat=${town.lat}&lon=${town.long}&key=93f54e39b9cf4fb482f13d78f30ac872`
    }).done(function (response) {
        console.log(response);
        createCityWeatherForcast(town, response);
    });
});


function createCityWeatherForcast(town, response) {
    let weatherForcastContainer = document.getElementsByClassName("weatherForecast");
    let cityContainer = document.createElement('div');
    cityContainer.className = 'col-sm-3';

    let cityName = document.createElement('div');
    cityName.innerText = town.name;

    let weatherDescription = document.createElement('div');
    weatherDescription.innerText = response.data[0].weather.description;

    let weatherImage = document.createElement('img');
    weatherImage.setAttribute("src", "./wwwroot/images/icons/weathericons/"+response.data[0].weather.icon+".png");
    weatherImage.setAttribute("alt", response.data[0].weather.description);

    cityContainer.appendChild(cityName);
    cityContainer.appendChild(weatherDescription);
    cityContainer.appendChild(weatherImage);
    weatherForcastContainer[0].appendChild(cityContainer);

}
