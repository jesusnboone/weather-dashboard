function weather() {
    var city = document.querySelector('#city').value;
    var apiKey = "1805b1fb611b9541105f2e5a649fba0b"
  
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q="
        + city
        + "&appid="
        + apiKey
    )

      .then(function(response) {
        return response.json();
      })

      .then(function(response) {
        console.log(response.city.name);

            // Create a variable that will select the <div> where the GIF will be displayed
            var responseContainerEl = document.querySelector('#response-container');
            var citySearch = (response.city.name)
      
            // Empty out the <div> before we append a GIF to it
      
            var cityButton = document.createElement('button');
            cityButton.innerHTML = citySearch
      
            // Append 'gifImg' to the <div>
            responseContainerEl.appendChild(cityButton)
        })

}
  