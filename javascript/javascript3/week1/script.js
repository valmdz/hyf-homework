const getUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=b8e2bab689f2c4f76b849b2533f789ff`;

const button = document.querySelector("button");
const input = document.querySelector("input");
const weatherInfo = document.querySelector(".weather-info");
const footer = document.querySelector("footer");
const alerts = document.querySelector(".alerts");
const alertText = document.createElement("p");

const displayWeather = (evt) => {
  evt.preventDefault();
  if (input.value.trim() === "") {
    footer.hidden = true;
    weatherInfo.hidden = true;
    alertText.innerHTML = "Please enter a city";
    alerts.appendChild(alertText);
    return;
  }
  fetch(getUrl(input.value))
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        weatherInfo.hidden = true;
        footer.hidden = true;
        alertText.innerHTML = data.message;
        alerts.appendChild(alertText);
        return;
      }

      weatherInfo.hidden = false;
      const $icons = document.querySelector(".icons");
      $icons.innerHTML = "";
      for (const weather of data.weather) {
        const $icon = document.createElement("img");
        $icon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
        $icon.style.width = 20;
        $icons.appendChild($icon);
      }

      const displayProp = ([selector, txt]) => {
        alertText.innerHTML = "";
        const property = document.querySelector(selector);
        property.innerHTML = txt;
        footer.hidden = false;
      };

      const secondsInLocale = (seconds) =>
        new Date(seconds * 1000).toLocaleTimeString();

      [
        [".city-name", `City: ${data.name}`],
        [".country", `Country: ${data.sys.country}`],
        [".temperature", `Temperature: ${data.main.temp} °C`],
        [".wind-speed", `Wind speed: ${data.wind.speed} m/s`],
        [".cloudiness", `Cloudiness: ${data.clouds.all} %`],
        [".sunrise", `Sunrise: ${secondsInLocale(data.sys.sunrise)} *`],
        [".sunset", `Sunset: ${secondsInLocale(data.sys.sunset)} *`],
      ].forEach(displayProp);
    });
};

document.querySelector("form").addEventListener("submit", displayWeather);
