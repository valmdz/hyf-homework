// 1. Item array removal
let names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
/* 
//My implementation of array filter
const myFilter = (names, nameToRemove) => {
  let newList = [];
  for (let i = 0; i < names.length; i++){
    if (names[i] != nameToRemove){
      newList.push(names[i]);
    }
  }
  return newList;
}

names = myFilter(names, nameToRemove);
*/

// Implementation using Array.prototype.filter()
names = names.filter(word => word !== nameToRemove);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


// 2. When will we be there?

const travelInformation = {
  speed: 50, 
  destinationDistance: 432, 
};

const travelTime = ({speed, destinationDistance}) => {
  const calcTime = destinationDistance/speed;
  const hours = Math.floor(calcTime);
  const minutes = Math.floor((calcTime % 1)*60);
  return `Travel: ${hours} hours and ${minutes} minutes`;
};

console.log(travelTime(travelInformation));


// 3. Series duration of my life. Calculate how much time a tv series have taken as a percentage of an average lifespan of 80 years.

const seriesDurations = [
  {
    title: 'Twin Peaks',
    days: 1,
    hours: 12,
    minutes: 48,  
  },
  {
    title: 'Breaking Bad',
    days: 1,
    hours: 12,
    minutes: 48,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
];

const days = 365;
const hours = days*24;
const minutes = hours*60;
let totalPercentage = 0;

for (let i = 0; i < seriesDurations.length; i++){
  const daysInYears = (seriesDurations[i].days)/days; 
  const hoursInYears = (seriesDurations[i].hours)/hours; 
  const minutesInYears = (seriesDurations[i].minutes)/minutes;
  const yearsPercentage = ((daysInYears + hoursInYears + minutesInYears)/80)*100;
  console.log(`${seriesDurations[i].title} took ${yearsPercentage.toPrecision(2)}% of my life`)
  totalPercentage = yearsPercentage;
  totalPercentage += totalPercentage;
};

console.log(`In total that is ${totalPercentage.toPrecision(2)}% of my life`);


// 4. NOnoN0nOYes (Note taking app)

const notes = [];

const saveNote = (content, id) => {
  const note = {
    content: content,
    id: id,
  }; 
  notes.push(note);
};

//Get a note

function getNote(id) {
  for (let i = 0; i < notes.length; i++){
    const note = notes[i];
    if (note.id === id) {
      return note;
    };
  };
  return('There is an error');
};


//Log out notes

const logOutNotesFormatted = () => {
  for (const note of notes){
    console.log(`The note with id ${note.id}, has the following note text: ${note.content}`);
  };
};

saveNote('Pick up groceries', 1);
saveNote('Get milk', 2);
saveNote('Get coffee', 3);

console.log(notes);

const firstNote = getNote(1); 
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

logOutNotesFormatted(); 


// 5. CactusIO-interactive (Smart phone usage app) optional

const activities = [];

const addActivity = (date, activity, duration) => 
  activities.push({date, activity, duration});

addActivity('23/7-18', 'Youtube', 30);
addActivity('22/7-18', 'Facebook', 50);
addActivity('22/7-18', 'Instagram', 45);

console.log(activities);

let totalTime = 0;
const limitTime = 100;

const showStatus = () => {
  
  for(let i = 0; i < activities.length; i++){
    let sumOf = activities[i].duration;
    totalTime += sumOf;
  };
  if (totalTime >= limitTime){
    return ('You have reached your limit, no more smartphoning for you!');
  } else {
    return `You added ${[activities.length]} activities. They amount for ${totalTime} minutes of usage`;
  };
};

console.log(showStatus());

