// 1. Flight booking

function getFullName(firstname, surname, useFormalName) {
  const title = useFormalName ? 'Lord ' : '';
  return `${title}${firstname} ${surname}`;
}

const fullname1 = getFullName('Frederik', 'Hanghøj', true);
const fullname2 = getFullName('Valentina','Méndez', false);

console.log(fullname1);
console.log(fullname2);

// 2.Event application

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let todayDate = new Date(); //Gets current day - today
let todayNumber = todayDate.getDay(); //Gets the number of the weekday of today where 0 is sunday
const todayName = weekdays[todayNumber];
console.log(`Today is ${todayName}`);

function daysToEvent (daysTo){
  let sumOfNumbers = todayNumber + daysTo;

  let weekdayNumber = sumOfNumbers % 7;
  const futureDay = weekdays[weekdayNumber];
  console.log(`The event is happening on a ${futureDay}`);
}

daysToEvent(0);
daysToEvent(1);
daysToEvent(2);
daysToEvent(3);
daysToEvent(4);
daysToEvent(5);
daysToEvent(6);
daysToEvent(7);
daysToEvent(37);
daysToEvent(365);



// 3. Weather wear

function getClothes (temperature) {
  if (temperature < 7){
   return 'warmest jacket and thermal clothes';
  } else if (temperature < 13){
    return 'a jacket, long sleeved shirt and pants';
  } else if (temperature < 20){
    return 'light jacket';
  } else {
    return 'short sleeve shirt and a skirt/shorts';
  }
}

console.log(getClothes(7));


// 4. student manager

const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`); 
    return;
  }

  if (studentName === '' || studentName === ' ') {
    console.log('Please add a student name to the class'); 
    return;
  }

  if (class07Students.length >= 6 && studentName !== 'Queen') {
    console.log('Cannot add more students to class 07');
    return;
  }

  class07Students.push(studentName);
  console.log(class07Students);
}

addStudentToClass('Valentina');
addStudentToClass('Valentina');
addStudentToClass('Ember');
addStudentToClass('Karolina');
addStudentToClass('Ali');
addStudentToClass('Kamal');
addStudentToClass('Maha');
addStudentToClass('Diego');
addStudentToClass('Ali');
addStudentToClass('Queen');
addStudentToClass('');

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(`Total number of students: ${getNumberOfStudents()}`);

// 5. Candy helper 

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

const prices = {"Sweet": .5, "Chocolate": .7, "Toffee": 1.1, "Chewing gum": .03}; 

const price = (candyType) => {
  return prices[candyType];
}

const addCandy = (candyType, weight) => {
  const kiloPrice = price(candyType);

  if(kiloPrice === undefined) {
    console.log(`Sorry, we do not sell ${candyType}`);
    return;
  }
  const pricePerWeight = weight * kiloPrice;
  boughtCandyPrices.push([candyType, (pricePerWeight)]);
}

addCandy('Sweet', 20);
addCandy('Chocolate', 30);
addCandy('Toffee', 5);
addCandy('Chewing gum', 10);
addCandy('Toffee', 20);
addCandy('Strawberry', 4);

console.log(boughtCandyPrices);

let sumSoFar = 0;

for (let i = 0; i < boughtCandyPrices.length; i++) {
  const currentPrice = boughtCandyPrices[i][1];
  sumSoFar = currentPrice + sumSoFar;
}
  
console.log({sumSoFar, amountToSpend});

const canBuyMoreCandy = (sumSoFar <= amountToSpend) ? 'You can buy more, so please do!' : 'Enough candy for you!';
console.log(canBuyMoreCandy);
