// Transalating one by one
const redBox = document.querySelector(".marks li:nth-child(1)");
const blueBox = document.querySelector(".marks li:nth-child(2)");
const greenBox = document.querySelector(".marks li:nth-child(3)");

const redTarget = document.querySelector(".targets li:nth-child(1)");
const blueTarget = document.querySelector(".targets li:nth-child(2)");
const greenTarget = document.querySelector(".targets li:nth-child(3)");

const translateOneByOne = async () => {
  await moveElement(redBox, { x: redTarget.offsetLeft - redBox.offsetLeft, y: redTarget.offsetTop - redBox.offsetTop }).then(() => {
    console.log("Red moved");
  });
  await moveElement(blueBox, { x: blueTarget.offsetLeft - blueBox.offsetLeft, y: blueTarget.offsetTop - blueBox.offsetTop }).then(() => {
    console.log("Blue moved");
  });
  await moveElement(greenBox, { x: greenTarget.offsetLeft - greenBox.offsetLeft, y: greenTarget.offsetTop - greenBox.offsetTop}).then(() => {
    console.log("Green moved");
  });
};

//translateOneByOne();

// Transalating all at once
const translateAllAtOnce = () => {
  moveElement(redBox,  { x: redTarget.offsetLeft - redBox.offsetLeft, y: redTarget.offsetTop - redBox.offsetTop }).then(() => {
    console.log("Red moved");
  });
  moveElement(blueBox, { x: blueTarget.offsetLeft - blueBox.offsetLeft, y: blueTarget.offsetTop - blueBox.offsetTop }).then(() => {
    console.log("Blue moved");
  });
  moveElement(greenBox, { x: greenTarget.offsetLeft - greenBox.offsetLeft, y: greenTarget.offsetTop - greenBox.offsetTop}).then(() => {
    console.log("Green moved");
  });
};
 translateAllAtOnce();
