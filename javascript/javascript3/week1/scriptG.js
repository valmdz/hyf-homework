const getUrl = (keyword, limit) =>
  `http://api.giphy.com/v1/gifs/search?api_key=W48u9Rxjtx2FE97CYfQzAjHj40IY27Mp&q=${encodeURIComponent(
    keyword
  )}&lang=en&limit=${limit}`;

const button = document.querySelector("button");
const input = document.querySelector(".keyword");
const content = document.querySelector(".content");
const filterNum = document.querySelector(".filterNumber");

const displayGifs = (evt) => {
  evt.preventDefault();
  const limit = filterNum.value === "" ? 25 : filterNum.value;
  fetch(getUrl(input.value, limit))
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      content.innerHTML = "";
      data.data.forEach((element) => {
        const div = document.createElement("div");
        const imgDisplay = document.createElement("img");
        imgDisplay.src = element.images.downsized.url;
        console.log(imgDisplay);
        div.appendChild(imgDisplay);
        content.appendChild(div);
      });
    });
};
document.querySelector("form").addEventListener("submit", displayGifs);
