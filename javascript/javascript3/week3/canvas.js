const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const onMouseMove = () => {};
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const randomColor = () => {
  return `rgb(${Math.random() * 0xff}, ${Math.random() * 0xff}, ${
    Math.random() * 0xff
  })`;
};

class Circle {
  constructor(startAngle, endAngle) {
    this.x = getRandomInt(canvas.width);
    this.y = getRandomInt(canvas.height);
    this.radius = getRandomInt(50);
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = randomColor();
  }
  draw() {
    if (canvas.getContext) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
      ctx.fillStyle = this.fillColor;
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}

setInterval(() => {
  new Circle(0, 2 * Math.PI).draw();
}, 100);

document.addEventListener("mousemove", onMouseMove);
