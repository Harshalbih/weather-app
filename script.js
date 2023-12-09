window.onload = function () {
  const api_url =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=c95d8d13f6eb9116dc3e74c039631730&q=";

  const searchinput = document.querySelector(".search-input");
  const searchbtn = document.querySelector(".search-btn");
  const weathericon = document.querySelector(".weather-icon");
  const displayweather = document.querySelector(".weather");
  const errormsg = document.querySelector(".error-msg");

  async function checkWeather(city) {

    const response = await fetch(api_url + city);
    var data = await response.json();
    console.log(data);

    if ((response.status == 404)) {
      errormsg.style.display = "block";
      displayweather.style.display = "none";
    } 
    else {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
      } 
      else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
      } 
      else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
      } 
      else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
      } 
      else if (data.weather[0].main == "rain") {
        weathericon.src = "images/rain.png";
      } 
      else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
      }

      displayweather.style.display = "block";
      errormsg.style.display = "none";

    }
  }

  searchbtn.addEventListener("click", () => {
    checkWeather(searchinput.value);
  });
  searchbtn.addEventListener("keypress", () => {
    checkWeather(searchinput.value);
  });
};
