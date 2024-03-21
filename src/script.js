function weatherApp(event) {
  event.preventDefault();
  let element = document.querySelector("#city-form");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = element.value;
}

let formElement = document.querySelector("#form-input");
formElement.addEventListener("submit", weatherApp);
