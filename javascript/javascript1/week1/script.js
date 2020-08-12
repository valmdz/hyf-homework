//Age-ify (A future age calculator)

const yearOfBirth = 1992; //Type of the variable is number
const yearFuture = 2073; //Type of the variable is number

const age = yearFuture - yearOfBirth;
console.log(age);
console.log(`You will be ${age} years old in ${yearFuture}`);


//Goodboy-Oldboy (A dog age calculator)

const ageOfDog = (dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears) => { 
  const years = dogYearFuture - dogYearOfBirth;
  const dogYears = years * 7;

  if(shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYears} dog years old in ${dogYearFuture}`);

  } else {
    console.log(`Your dog will be ${years} human years old in ${dogYearFuture}`);
  }
} 

ageOfDog(2004, 2024, true);
ageOfDog(2004, 2024, false);


//Housey pricey (A house price estimator)

const priceOfHouse = (widthOfHouse, depthOfHouse, heightOfHouse, gardenSizeInM2, nameOfFriend, valueOfHouse) => {
  const volumeInMeters = widthOfHouse * depthOfHouse * heightOfHouse;
  const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  const differenceHousePrice = housePrice - valueOfHouse;
  
  console.log(`The price of ${nameOfFriend}'s house is ${housePrice}`);
  console.log(`${nameOfFriend} will be paying a difference of ${differenceHousePrice} on the value of the house`);
}

priceOfHouse(8,10,10,100,"Peter",2500000);
priceOfHouse(5,11,8,70,"Julia", 1000000);



//Ez Namey (Startup name generator) Optional

const firstWords = ['easy','crypto','micro','tech','go','blue','light','energy','green','right'];
const secondWords = ['domain','block','chain','tech','hack','blue','trade','deliv','right','go'];

const startupName = firstWords[4] + secondWords[8];

console.log(`The startup "${startupName}" contains ${startupName.length} characters`);