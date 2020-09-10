// Print delayed messages

setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

const delayedMessage = (delay, stringToLoad) => {
  setTimeout(() => {
    console.log(stringToLoad);
  }, delay * 1000);
};

delayedMessage(3, "This string logged after 3 seconds");

const callFuction = () => {
  delayedMessage(5, "This string logged after 5 seconds");
};

const buttonDelay = document.getElementById("delay-button");
buttonDelay.addEventListener("click", callFuction);

// Planet log

const earthLogger = () => {
  console.log("Earth");
};

const saturnLogger = () => {
  console.log("Saturn");
};

const planetLogFunction = (callback) => {
  callback();
};

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Log Geo-location
const buttonLocation = document.getElementById("location-button");
const printLocation = document.getElementById("location");
const buttonLocationOff = document.createElement("button");
buttonLocationOff.innerHTML = "Hide location";

function getLocation() {
  navigator.geolocation
    ? navigator.geolocation.watchPosition(showPosition)
    : (printLocation.innerHTML = "Error");
}

function showPosition(position) {
  printLocation.innerHTML = `This is the latitude: ${position.coords.latitude} <div> This is the longitude: ${position.coords.longitude}`;

  // const map;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: position.coords.latitude, lng: position.coords.longitude },
  //     zoom: 8
  //   });
  // }
  // initMap();
}

buttonLocation.addEventListener("click", getLocation);

// runAfterDelay
const body = document.querySelector("body");

const changeColors = () => {
  const divBackgroundButton = document.getElementById("background-button");
  body.style.background = "black";
  body.style.color = "white";
  const buttonBackground = document.createElement("button");
  buttonBackground.innerHTML = "Change colors";

  const changeBackground = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = "#" + randomColor;
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    body.style.color = "#" + randomColor2;
  };

  buttonBackground.addEventListener("click", changeBackground);
  divBackgroundButton.appendChild(buttonBackground);
};

const runAfterDelay = (delay, callback) => {
  setTimeout(() => {
    callback();
  }, delay * 1000);
};

runAfterDelay(4, function () {
  console.log("Should be logged after 4 seconds");
});

runAfterDelay(7, changeColors);

// Check for double clicks
body.addEventListener("dblclick", () => {
  console.log("double click!");
});

//Create a function called jokeCreator that has three parameters:
// shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
// If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
const jokeCreator = (shouldTellFunnyJoke) => {
  const funnyJokes = [
    { Q: "Why did the crab never share?", A: "Because he's shellfish" },
    {
      Q: "What is every whale's favorite greeting? ",
      A: "Whale hello there!",
    },
    {
      Q: "What do you call a cow that can play a musical instrument?",
      A: "A moo-sician.",
    },
    {
      Q: "Did you hear about the Italian chef with a terminal illness? ",
      A: "He pastaway.",
    },
    { Q: "A guy just threw a glass of milk at me. ", A: "How dairy!" },
  ];
  const badJokes = [
    {
      Q: "I was going to grow an herb garden",
      A: "but I couldn't find the thyme.",
    },
    { Q: "What’s a golf clubs favorite type of music?", A: "Swing." },
    {
      Q:
        "What did the dolphin say after he accidentally swam into another sea creature?",
      A: "I didn't do it on porpoise",
    },
    { Q: "How do you make a bandstand?", A: "Take away their chairs." },
    { Q: "Which musical genre makes balloons terrified?", A: "Pop." },
  ];
  const pick = (xs) => xs[Math.floor(Math.random() * xs.length)];

  console.log(pick(shouldTellFunnyJoke ? funnyJokes : badJokes));
};

jokeCreator(true);
jokeCreator(false);

// FUNCTION AS A VARIABLE

// Make an array of functions and call them
const greeting = () => console.log("Oh! Hello");
const message = () => console.log("Have a lovely day, mister");
const thank = () => console.log("No need to thank me, thanks to you!");

const mkLog = (s) => () => console.log(s);
const greeting1 = mkLog("Oh! Hello");
const FF = ["Oh! Hello", "Have a lovely day, mister", "No need to thank me, thanks to you!"].map(mkLog);

const Functions = [greeting, message, thank];

Functions.forEach((f) => f());

// Write a regular and an arrow function
function regularFunction() {
  console.log("I am a regular function.");
  console.log("Booo! https://www.youtube.com/watch?v=QqWIXFLeeiI");
}

const arrowFunction = () => {
  console.log("I am an arrow function.");
  console.log("Yeiii!");
};

regularFunction();
arrowFunction();

//Create an object that has a key whose value is a function. Try calling this function.
const obj = {
  0: () => {
    console.log("Another function");
  },
};

obj[0]();
