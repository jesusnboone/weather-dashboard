function weather() {
    var city = document.querySelector('#city').value;
    var apiKey = "1805b1fb611b9541105f2e5a649fba0b"
  
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&appid="
        + apiKey
    )

    .then(function(response) {return response.json();})
    
    .then(function(response) {
        if (city.length === 0) {
            alert("Please enter a city!")
        }
        else {
        console.log(response);
        console.log(response.dt);
        var temperatureContainerEl = document.querySelector('#temperature-container');
        var cityContainerEl = document.querySelector('#city-container');
        var dateContainerEl = document.querySelector('#date-container');
        var nameContainerEl = document.querySelector('#name-container');
        var date = Date(response.dt);
        var citySearch = (response.name);
        var temperature = (response.main.temp);
        var temperatureF = Math.floor((temperature - 273.15) * 9 / 5 + 32);
      

        var cityButton = document.createElement('button');
        cityButton.innerHTML = citySearch;
        cityContainerEl.appendChild(cityButton);

        dateContainerEl.innerHTML = date;
        nameContainerEl.innerHTML = citySearch;
        temperatureContainerEl.innerHTML = temperatureF + "°F";

        }
    })
}