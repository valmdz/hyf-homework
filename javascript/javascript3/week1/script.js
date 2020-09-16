const getUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=b8e2bab689f2c4f76b849b2533f789ff`;

const button = document.querySelector("button");
const input = document.querySelector("input");
const weatherInfo = document.querySelector(".weather-info");

const dummyData = {
  //Remove this
  coord: { lon: 12.57, lat: 55.68 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: {
    temp: 289.82,
    feels_like: 289.85,
    temp_min: 288.15,
    temp_max: 290.93,
    pressure: 1025,
    humidity: 88,
  },
  visibility: 10000,
  wind: { speed: 2.1, deg: 200 },
  clouds: { all: 0 },
  dt: 1600114080,
  sys: {
    type: 1,
    id: 1575,
    country: "DK",
    sunrise: 1600058418,
    sunset: 1600104620,
  },
  timezone: 7200,
  id: 2618425,
  name: "Copenhagen",
  cod: 200,
};

const dummyPromise = Promise.resolve(dummyData); //Remove this

const displayWeather = () => {
  const city = input.value;
  fetch(getUrl(city)) //This is the good stuff
    .then((response) => response.json()) //This is the good stuff
    .then((data) => {
      const icons = data.weather.map((values) => values.icon);
      const getIconsValues = () => {
        for (let i = 0; i < icons.length; i++) {
          const icon = document.querySelector(".icons"); //Doubt about displaying multiple icons and avoid creating more images when clicking the button
          icon.src = `http://openweathermap.org/img/wn/${icons[i]}@2x.png`;
          icon.style.width = 20;
          weatherInfo.appendChild(icon);
        }
      };
      getIconsValues();

      const cityName = document.querySelector(".city-name");
      cityName.innerHTML = `City: ${data.name}`;
      weatherInfo.appendChild(cityName);

      const temperature = document.querySelector(".temperature");
      temperature.innerHTML = `Temperature: ${data.main.temp} °C`;
      weatherInfo.appendChild(temperature);

      const windSpeed = document.querySelector(".wind-speed");
      windSpeed.innerHTML = `Wind speed: ${data.wind.speed}`;
      weatherInfo.appendChild(windSpeed);

      const cloudiness = document.querySelector(".cloudiness");
      cloudiness.innerHTML = `Cloudiness: ${data.clouds.all}%`;
      weatherInfo.appendChild(cloudiness);

      const convertDay = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString();
      };

      const sunrise = document.querySelector(".sunrise");
      sunrise.innerHTML = `Sunrise: ${convertDay(data.sys.sunrise)}`;
      weatherInfo.appendChild(sunrise);

      const sunset = document.querySelector(".sunset");
      sunset.innerHTML = `Sunset: ${convertDay(data.sys.sunset)}`;
      weatherInfo.appendChild(sunset);
    }); //Remove dummyPromise
};

button.addEventListener("click", displayWeather);

// Copenhagen
