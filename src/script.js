function currentTemperature(response) {
  let cityElement = document.querySelector("#city");
  let weather = document.querySelector("#temperatureData");
  let conditionElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="cloud"/>`;
  dateElement.innerHTML = weatherDate(date);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  conditionElement.innerHTML = response.data.condition.description;
  windElement.innerHTML = `${response.data.wind.speed}Km/h`;
  weather.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
}
function weatherDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;

  return `${day} ${hours}:${minutes}`;
}

function weatherApp(city) {
  let ApiKey = "8e4efa33a280aof6c33fe6a0t3ab54ec";
  let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}&units=metric`;
  axios.get(ApiUrl).then(currentTemperature);
}

function cityTempo(event) {
  event.preventDefault();
  let element = document.querySelector("#city-form");
  weatherApp(element.value);
}

let formElement = document.querySelector("#form-input");
formElement.addEventListener("submit", cityTempo);

weatherApp("lisbon");
