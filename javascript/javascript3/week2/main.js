const boxes = [1, 2, 3].map((n) => ({
  source: document.querySelector(`.marks li:nth-child(${n})`),
  target: document.querySelector(`.targets li:nth-child(${n})`),
}));

const moveToTargets = ({ source, target }) =>
  moveElement(source, {
    x: target.offsetLeft - source.offsetLeft,
    y: target.offsetTop - source.offsetTop,
  }).then(console.log(`${source} moved`));

const translateOneByOne = async () => {
  for (const box of boxes) {
    await moveToTargets(box);
  }
};

// Transalating all at once
const translateAllAtOnce = () =>
  Promise.all(
    boxes.map((box) =>
      moveToTargets(box).then(console.log(`${box.source} moved`))
    )
  );

translateOneByOne();
// translateAllAtOnce();
