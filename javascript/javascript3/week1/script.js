const getUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=b8e2bab689f2c4f76b849b2533f789ff`;

const button = document.querySelector("button");
const input = document.querySelector("input");
const weatherInfo = document.querySelector(".weather-info");

const displayWeather = (evt) => {
  evt.preventDefault();
  if (input.value.trim() === "") {
    weatherInfo.hidden = true;
    return;
  }
  fetch(getUrl(input.value))
    .then((response) => response.json())
    .then((data) => {
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
        const property = document.querySelector(selector);
        property.innerHTML = txt;
      };

      const secondsInLocale = (seconds) =>
        new Date(seconds * 1000).toLocaleTimeString();

      [
        [".city-name", data.name],
        [".country", data.sys.country],
        [".temperature", data.main.temp],
        [".wind-speed", data.wind.speed],
        [".cloudiness", data.clouds.all],
        [".sunrise", secondsInLocale(data.sys.sunrise)],
        [".sunset", secondsInLocale(data.sys.sunset)],
      ].forEach(displayProp);
    });
    document.querySelector('footer').hidden = false;
};

document.querySelector("form").addEventListener("submit", displayWeather);
