// Create a function that has one parameter: resolveAfter.
//Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
const test = (resolveAfter) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });

//Another way of writting the above
const test2 = (resolveAfter) =>
  new Promise((resolve) => {
    setTimeout(resolve, resolveAfter * 1000);
  });

//Another way of writting the above
const test1 = (resolveAfter) =>
  new Promise((resolve) => setTimeout(resolve, resolveAfter * 1000));

test(8).then(() => {
  console.log("I am called asynchronously");
});

//When you have written the promise, use it with async/await
const delayed = async (resolveAfter) => {
  await test(resolveAfter);
  console.log("I am called asynchronously: Async-await");
};
delayed(8);

// Rewrite setTimeout to a promise.

const setTimeoutP = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

setTimeoutP(2000).then(console.log("setTimeOut"));

// navigator.geolocation.getCurrentPosition into promise
const positionPromise = () =>
  new Promise((resolve) => navigator.geolocation.getCurrentPosition(resolve));

console.log(positionPromise());
positionPromise().then((pos) => {
  const crd = pos.coords;
  console.log(`latitude: ${crd.latitude}`);
  console.log(`longitude: ${crd.longitude}`);
  console.log(`Aprox ${crd.accuracy} mtrs`);
});

//Fetching and waiting
//The 3 steps: Wait 3 seconds. After that, fetch some data from any api you like. Log out the data from the api
const url = "http://api.open-notify.org/astros.json";

//Do the 3 steps below using promises and .then.
const afterThreePromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

afterThreePromise()
  .then(() => fetch(url))
  .then((response) => response.json())
  .then((data) => console.log(".then", data));

//Do the 3 steps below using async/await

const asyncAfterThree = async () => {
  await afterThreePromise();
  const response = await fetch(url);
  const data = await response.json();
  console.log("async-await", data);
};

asyncAfterThree();
