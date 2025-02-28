//The function to get the weather data.
function getWeather() {
    let city = document.getElementById("cityInput").value;

    //Using the Open Weather API key
    let apiKey = "ba41d3077776685b8639ed5ae0b25dd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //Fetch the data from URL after the API call.
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.cod === 200){
            document.getElementById("weatherResult").innerHTML = 
                `Temperature: ${data.main.temp}°C <br>
                 Humidity: ${data.main.humidity}% <br>
                 Condition: ${data.weather[0].description}`;
        }
        else{
            document.getElementById("weather").innerHTML = "The given location could not be found.";
        }
    })
    //Giving an error message if weather data could not be fetched.
    .catch(() => {
        document.getElementById("weather").innerHTML = "Cannot fetch the Weather data.";
    });
}
