//Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

const filterWords = (danishWords) => {
  const mapArray = danishWords.map(x => x.length);
  const findMin = Math.min(...mapArray);
  const getIndex = mapArray.indexOf(findMin);
  console.log(danishWords[getIndex]);
};

filterWords(danishWords); // returns 'ø'

//Find and count the Danish letters: Find the individual number and the total number of Danish letters in a string.

const findLetters = (danishLetter, sentence) => {
  const resultingCount = {
    total: 0
  };

  for (const value of sentence){
    if(danishLetter.includes(value)){
      resultingCount.total++;
      const lettersCount = resultingCount[value] || 0;
      resultingCount[value] = lettersCount + 1;
    }
  };
  
  return resultingCount;
};

const danishLetter = ['æ', 'ø', 'å'];

console.log(findLetters(danishLetter, 'Jeg har en blå bil')); // returns {total: 1, å: 1}
console.log(findLetters(danishLetter, 'Blå grød med røde bær')); // returns {total: 4, æ: 1, ø: 2, å: 1}
