function currentTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let weather = document.querySelector("#temperatureData");
  weather.innerHTML = Math.round(response.data.temperature.current);
}

function weatherApp(event) {
  event.preventDefault();
  let element = document.querySelector("#city-form");
  let city = element.value;
  let ApiKey = "8e4efa33a280aof6c33fe6a0t3ab54ec";
  let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}&units=metric`;
  axios.get(ApiUrl).then(currentTemperature);
}

let formElement = document.querySelector("#form-input");
formElement.addEventListener("submit", weatherApp);
