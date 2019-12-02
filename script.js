const DOMAIN = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = "OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR";

//const BASE_URL = 'http://api.giphy.com/v1/gifs/search?q=clothes&api_key=OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR&limit=1'
window.onload = function () {

  const button = document.querySelector("button")
  const clickedElement = document.querySelector('#blank')
  const favCont = document.querySelector(".FavContainer");
  const resultsDiv = document.querySelector('#results')
 // const span = document.querySelector(".count");
  const imgOutput = document.querySelector("#outputIMG");
  const giphyInput = document.querySelector("input");
  const background = document.querySelector(".fullscreen-bg")
  const favHeart = document.querySelector(".fas fa-heart")
  const detailsDiv = document.querySelector("#Giphy-info")



  button.addEventListener('click', async function (evt) {
    evt.preventDefault();
    const clickedElement = evt.target;
    const giphy = giphyInput.value;
    const response = await axios.get(`${DOMAIN}${giphy}&api_key=${API_KEY}`);
    console.log(response)
    let result = response.data.data;
    let pageCount = response.data.pagination.count;
    // let newH3 = document.createElement('h3');
    // newH3.innerHTML = pageCount;
    // span.appendChild(newH3);
    // console.log(pageCount);

    function giphyInfo() {
      resultsDiv.innerHTML = "";
      for (let i = 0; i < result.length; i++) {
       const gifsContainer = document.createElement('div')
        gifsContainer.className = "gifsContainer"
        let searchTitle = result[i].title;
        let imgList = result[i].images.fixed_height.url;
        let imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", imgList);
        let newH = document.createElement('h4');
        let iFav = document.createElement('i');
        let button2 = document.createElement("button");
        iFav.innerHTML = favHeart;
        newH.innerHTML = searchTitle;

        gifsContainer .appendChild(newH);
        gifsContainer .appendChild(imgContainer);
        gifsContainer .appendChild(button2);
        resultsDiv.appendChild(gifsContainer);

        button2.addEventListener('click', function () {
          let clickedElement2 = searchTitle;
          console.log(clickedElement2);
          //Need to append clickedElement2 to favorite
          let favorites = [];
          favorites.push(clickedElement2);
          favorites.forEach(function (element) {
            let newH5 = document.createElement('li');
            newH5.innerHTML = element;
            favCont.appendChild(newH5);
          })

        });
      }
    }
    giphyInfo();

  })
}

