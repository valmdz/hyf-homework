/*
Create a function that has two parameters: imageUrl and elementToAppendImageTo. 
The function should create an img tag and set the src attribute of the img to the imageUrl parameter. 
The function should then append the img to the elementToAppendImageTo - html element.
*/

const setName = (imageUrl, elementToAppendImageTo) => {
  const placementSelector = elementToAppendImageTo;
  const ImgCreate = document.createElement('img');
  ImgCreate.src = imageUrl;
  placementSelector.appendChild(ImgCreate);
};

setName('https://picsum.photos/536/354', document.querySelector('body'));
