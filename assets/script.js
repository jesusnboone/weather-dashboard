function weather() {
    var city = document.querySelector('#city').value;
    var apiKey = "1805b1fb611b9541105f2e5a649fba0b"
  
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=imperial"
        + "&appid="
        + apiKey
    )

    .then(function(response) {return response.json()})
    
    .then(function(response) {
        if (city.length === 0) {
            alert("Please enter a city!")
        }
        else {
            console.log(response);
            var uvIndexContainerEl = document.querySelector('#uv-index-container');
            var windSpeedContainerEl = document.querySelector('#wind-speed-container');
            var temperatureContainerEl = document.querySelector('#temperature-container');
            var cityContainerEl = document.querySelector('#city-container');
            var dateContainerEl = document.querySelector('#date-container');
            var nameContainerEl = document.querySelector('#name-container');
            var date = Date(response.dt);
            var citySearch = (response.name);
            var temperature = (response.main.temp);
            var windSpeed = (response.wind.speed);
            var lat = (response.coord.lat);
            var lon = (response.coord.lon);

            var cityButton = document.createElement('button');
            cityButton.innerHTML = citySearch;
            cityContainerEl.appendChild(cityButton);
    
            dateContainerEl.innerHTML = date;
            nameContainerEl.innerHTML = citySearch;
            temperatureContainerEl.innerHTML = temperature + "°F";
            windSpeedContainerEl.innerHTML = windSpeed + "MPH";
        
            console.log(lat);
            console.log(lon);

            fetch(
                "https://api.openweathermap.org/data/2.5/uvi?appid="
                + apiKey
                + "&lat="
                + lat
                + "&lon="
                + lon
            )
            .then(function(uvi) {return uvi.json()})
            .then(function(uvi) {
            var uv = (uvi.value);
            uvIndexContainerEl.innerHTML = uv;
            })

            fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q="
                + city
                + "&units=imperial"
                + "&appid="
                + apiKey
            )

            .then(function(five) {return five.json()})
            .then(function(five) {

            var dates = [];
            // five is data from api
            for (var i = 0; i < five.list.length; i++) {
            var isTwelve = five.list[i]["dt_txt"].split(" ")[1].split(":")[0] == 12;
            if (isTwelve) {
                // populate with weather data from this object
                dates.push(five.list[i]);
            }
            }
            console.log(dates);
            for (var i = 0; i < dates.length; i++) {

            var dateCard = document.createElement("div");
            dateCard.textContent = dates[i].dt_txt;
            document.body.appendChild(dateCard);
            
            var tempCard = document.createElement("div");
            tempCard.textContent = dates[i].main.temp + "°F";
            document.body.appendChild(tempCard);

            var humidCard = document.createElement("div");
            humidCard.textContent = dates[i].main.humidity + "%";
            document.body.appendChild(humidCard);
            }})
        }
    })
}