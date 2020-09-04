const root = document.querySelector(".name-form");

const formDescr = document.createElement("label");
formDescr.innerHTML = "Please enter your name";
formDescr.style.paddingRight = "1%";
root.appendChild(formDescr);

const input = document.createElement("input");
root.appendChild(input);

const button = document.createElement("button");
button.innerHTML = "Submit";
button.style.marginLeft = "1%";
button.style.border = "0";
button.style.padding = "0.5%";
button.style.backgroundColor = "#82B8D9";
root.appendChild(button);

const tagResult = document.createElement("p");
tagResult.style.fontWeight = "bold";
tagResult.style.fontSize = "18px";
root.appendChild(tagResult);

const newButton = document.createElement("button");
newButton.style.marginLeft = "1%";
newButton.style.border = "0";
newButton.style.padding = "0.5%";
newButton.style.backgroundColor = "#82B8D9";
newButton.innerHTML = "Try again";

const pick = (words) => words[Math.floor(Math.random() * words.length)];

const buttonSubmit = () => {
  const name = document.querySelector("input").value;
  const randomGenerate = () => {
    const animals = [
      "bear",
      "fox",
      "wolf",
      "mantis",
      "hummingbird",
      "coyote",
      "dragonfly",
      "leopard",
      "linx",
      "wolverine",
    ];
    const adjectives = [
      "devious",
      "sneaky",
      "cunning",
      "plucky",
      "spirited",
      "scintillating",
      "sagacious",
      "nimble",
      "dauntless",
      "true-hearted",
    ];
    document.querySelector("p").innerHTML = `${name} - The ${pick(
      adjectives
    )} ${pick(animals)}`;
  };

  randomGenerate();
  button.disabled = true;
  root.appendChild(newButton);

  if (name.trim() === "") {
    document.querySelector("p").innerHTML = "No name entered";
    button.disabled = false;
    root.removeChild(newButton);
  }
};

button.addEventListener("click", buttonSubmit);
newButton.addEventListener("click", buttonSubmit);
