var weatherTowns = [];

//var weatherapiKey = "68e04e7f0bmsh88a196efbca07adp153910jsn219512fc1d16";

// Add to the weatherTowns array the selected towns
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "belfast"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "dublin"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "galway"));
weatherTowns.push(towns.find(t => t.name.toLowerCase() == "cork"));


// Loop through the array and display that towns weather
weatherTowns.forEach(town => {
    $.ajax({
        url: `https://api.weatherbit.io/v2.0/current?lat=${town.lat}&lon=${town.long}&key=93f54e39b9cf4fb482f13d78f30ac872`,
//        error: ...
    }).done(function (response) {
        console.log(response);
        createCityWeatherForcast(town, response);
    });
});

// Create the weather forcast for each town that is passed into it and display it on the page
function createCityWeatherForcast(town, response) {
    let weatherForcastContainer = document.getElementsByClassName("weatherForecast");
    let cityContainer = document.createElement('div');
    let cityName = document.createElement('div');
    let weatherDescription = document.createElement('div');
    let weatherDisplay = document.createElement('div');
    let weatherImage = document.createElement('img');
    let weatherTempContainer = document.createElement('div');
    let weatherTemperature = document.createElement('div');
    let tempType = document.createElement('div');
    
    weatherDisplay.className = 'weatherCity';
    weatherTempContainer.className = 'temp';
    cityContainer.className = 'col-sm-3';
    cityName.innerText = town.name;

    weatherDescription.innerText = response.data[0].weather.description;
    weatherImage.setAttribute("src", "./wwwroot/images/icons/weathericons/"+response.data[0].weather.icon+".png");
    weatherImage.setAttribute("alt", response.data[0].weather.description);

    weatherTemperature.innerText = response.data[0].temp;

    tempType.innerText = "°C";

    weatherDisplay.appendChild(cityName);
    weatherDisplay.appendChild(weatherDescription);
    weatherDisplay.appendChild(weatherImage);
    weatherTempContainer.appendChild(weatherTemperature);
    weatherTempContainer.appendChild(tempType);
    cityContainer.appendChild(weatherDisplay);
    cityContainer.appendChild(weatherTempContainer);
    
    weatherForcastContainer[0].appendChild(cityContainer);
}
