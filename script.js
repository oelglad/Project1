const DOMAIN = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = "OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR";

//const BASE_URL = 'http://api.giphy.com/v1/gifs/search?q=clothes&api_key=OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR&limit=1'
window.onload = function () {

  const button = document.querySelector("button")
  const clickedElement = document.querySelector('#blank')
  const section = document.querySelector(".Favorite")
  const div = document.querySelector(".gifsContainer");
  const span = document.querySelector(".count");
  const imgOutput = document.querySelector("#outputIMG");
  const giphyInput = document.querySelector("input");
  const background = document.querySelector(".fullscreen-bg")
  const favHeart = document.querySelector(".fas fa-heart")


  let newH2 = document.createElement("h");
  newH2.innerHTML = "Favorite";
  section.appendChild(newH2);

  button.addEventListener('click', async function (evt) {
    evt.preventDefault();
    const clickedElement = evt.target;
    const giphy = giphyInput.value;
    const response = await axios.get(`${DOMAIN}${giphy}&api_key=${API_KEY}`);
    console.log(response)
    let result = response.data.data;
    let pageCount = response.data.pagination.count;
    let newH3 = document.createElement('h3');
    newH3.innerHTML = pageCount;
    span.appendChild(newH3);
    console.log(pageCount);

    function giphyInfo() {
      div.innerHTML = "";
      for (let i = 0; i < result.length; i++) {
        let searchTitle = result[i].title;
        let b = document.createElement('button2');
        let imgList = result[i].images.fixed_height.url;
        let imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", imgList);
        let newH = document.createElement('h4');
        let iFav = document.createElement('i');
        let button2 = document.createElement("button");
        iFav.innerHTML = favHeart;
        newH.innerHTML = searchTitle;
        
        div.appendChild(newH);
        div.appendChild(imgContainer);
        div.appendChild(button2);

        button2.addEventListener('click', function (evt) {
          let clickedElement2 = evt.target;
        }, false);
        if (evt.target.tagName === 'h4') {
          evt.target.classList.toggle('.gifsContainer');
          let element = document.getElementsByTagName("newH");
          element.classList.toggle(".Favorite");
        }
      }
    }
    giphyInfo();

  })
}

