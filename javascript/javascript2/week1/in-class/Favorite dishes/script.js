const favoriteDishes = [
  'pastor tacos', 
  'enfrijoladas', 
  'pizza', 
  'crayfish' , 
  'pad thai'];

const div = document.querySelector('div');
const ulDishes = document.createElement('ul');
ulDishes.innerHTML = 'My favorite dishes';
div.appendChild(ulDishes);

for(let i = 0; i < favoriteDishes.length; i++) {
  let nameOfDish = document.createElement('li');
  nameOfDish.innerText = favoriteDishes[i];
  ulDishes.appendChild(nameOfDish);
};