import { key } from "./key.js";

// getsc api
async function getGif(q, api_key, offset) {
  try {
    const params = {
      api_key,
      q,
      rating: "pg-13",
      limit: 1,
      offset: offset(),
    };
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params,
    });
    let gifUrl = res.data.data[0].images.original.url;
    createGif(gifUrl);
  } catch (err) {
    console.error("Error fetching GIF:", err);
  }
}

// creates gif on document
function createGif(gifUrl) {
  const gif = document.querySelector("#gifContainer");
  const gifGif = document.createElement("img");
  gifGif.src = gifUrl;
  gif.appendChild(gifGif);
}

// random gif
const offset = () => {
  // gives me a number between 0 and 4999
  return Math.floor(Math.random() * 5000);
};

// sends error
function createErr(params) {
  const errDiv = document.createElement("div");
  errDiv.textContent = params;
  form.appendChild(errDiv);
}

const form = document.querySelector("form");
const input = document.querySelector("#searchGif");
const removeAll = document.querySelector("#removeAll");
const gifContainer = document.querySelector("#gifContainer");

// form submit
const api_key = key;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regex = new RegExp("[a-zA-Z][a-zA-Z ]+");
  if (regex.test(input.value)) {
    getGif(input.value.replace(/ /g, "-"), api_key, offset);
  } else {
    createErr("Only letters allow");
  }
  input.value = "";
});

// remove button
removeAll.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
