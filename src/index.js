function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("search-input");
  let heading = document.querySelector("#current-city");
  heading.innerHTML = searchInput.value;
}

function formatDate(date) {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[now.getDay()];
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
}
let todaysDate = document.querySelector(".currentDate");
todaysDate.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

let apiKey = `8908d7b1834oa44093b7b64af0t393f3`;
let city = "Miami";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function displayTemperature(response) {}

axios.get(apiUrl).then(displayTemperature);
console.log(apiUrl);
