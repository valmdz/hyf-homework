const inputText = document.querySelector('.name-form');

const formDescr = document.createElement('label');
formDescr.innerHTML = 'Please enter your name';
formDescr.style.paddingRight = '1%'; 
inputText.appendChild(formDescr);

const input = document.createElement('input');
inputText.appendChild(input);

const button = document.createElement('button');
button.innerHTML = 'Submit';
button.style.marginLeft = '1%';
button.style.border = '0';
button.style.padding = '0.5%';
button.style.backgroundColor = '#82B8D9';
inputText.appendChild(button);

const tagResult = document.createElement('p');
tagResult.style.fontWeight = 'bold';
tagResult.style.fontSize = '18px';
inputText.appendChild(tagResult);

const buttonSubmit = () => {
  const name = document.querySelector('input').value;
  const animals = ['bear', 'fox', 'wolf', 'mantis', 'hummingbird', 'coyote', 'dragonfly', 'leopard', 'linx', 'wolverine']
  const adjectives = ['devious', 'sneaky', 'cunning', 'plucky', 'spirited', 'scintillating', 'sagacious', 'nimble', 'dauntless', 'true-hearted'];
  const randomize = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${animals[Math.floor(Math.random() * animals.length)]}`;
  document.querySelector('p').innerHTML = (`${name} - The ${randomize}`);
  button.innerHTML = 'Try again';
  if (name.trim() === '') {
    document.querySelector('p').innerHTML = 'No name entered';
  }
};

button.addEventListener('click', buttonSubmit)