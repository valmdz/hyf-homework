let name;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthToText;
let todo = [];

const getReply = (command) => {
  // Greet with name
  if (command.match('Hello my name is ')){
    name = (command.slice(17));
    if (name === '' || name === ' '){
      return (`Please enter a name`);
    };
    return (`Nice to meet you ${name}`);
  };

  // Return name
  if (command === 'What is my name?'){
    return name;
  };

  // Add element to a todo
  if (command.match('Add') && command.match('todo')){
    const regexpAddAct =  /Add (?<activity>.+) to my todo/g;
    const matchAdd = regexpAddAct.exec(command);
    const action = matchAdd[1];
    todo.push(action);
    return (`${action} added to your todo`);
  };

  // Remove element from a todo
  if (command.match('Remove') && command.match('todo')){
    const regexpRemoveAct =  /Remove (?<activity>.+) from my todo/mg;
    const matchRemove = regexpRemoveAct.exec(command);
    const activity = matchRemove[1];
    todo = todo.filter(word => word !== activity);
    return `Removed ${activity} from your todo`;
  };

  // Return what is in my todo
  if (command === 'What is on my todo?'){
    return `You have ${todo.length} todos - ${todo.join(' and ')}`;
  };
  
  // Get day
  if (command === 'What day is it today?'){
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    for (let i = 0; i <= months.length; i++){
      if (month === i){
        monthToText = months[(i)];
      };
    };
    const year = today.getFullYear();
    return `${day}. of ${monthToText} ${year}`;
  };

  // Math operations
  if (command.match('What is ')){
    const extractElements = /(?<left>[0-9]+) (?<operator>.) (?<right>[0-9]+)/;
    let match = command.match(extractElements);
      if (match[2] === '+'){
        return (Number(match[1]) + Number(match[3]));
      };
      if (match[2] === '*'){
        return (Number(match[1]) * Number(match[3]));
      };
      if (match[2] === '/'){
        return (Number(match[1]) / Number(match[3]));
      };
      if (match[2] === '-'){
        return (Number(match[1]) - Number(match[3]));
      };
  };

  // Timer 
  if (command.match('Set a timer for ')){
    const words = (command.split(' '));
    const numberTimer = Number(words[4]);
    const unitsTimer = (words[5]);
    if (unitsTimer === 'minutes'){
      const minutesNumber = numberTimer * 60;
      setTimeout(() => {console.log('Timer done');},minutesNumber * 1000);
    };
    if (unitsTimer === 'seconds'){
      const secondsNumber = numberTimer;
      setTimeout(() => {console.log('Timer done');},secondsNumber * 1000);
    };
    if (unitsTimer === 'hours'){
      const hoursNumber = numberTimer * 3600;
      setTimeout(() => {console.log('Timer done');},hoursNumber * 1000);
    };
    return `Timer set for ${numberTimer} ${unitsTimer}`;
  };
};

console.log(getReply('Hello my name is Benjamin something'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo')); 
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Add baking to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('What is 4 * 12'));
console.log(getReply('What is 20 / 2'));
console.log(getReply('What is 20 - 2'));
console.log(getReply('Set a timer for .1 minutes')); //Change to 4 minutes
