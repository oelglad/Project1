const DOMAIN = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = "OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR";

//const BASE_URL = 'http://api.giphy.com/v1/gifs/search?q=clothes&api_key=OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR&limit=1'
window.onload = function () {

    const button = document.querySelector("button")
    const button2 = document.querySelector("#add")
    const clickedElement = document.querySelector('#blank')
    const section = document.querySelector(".Favorite")
    const div = document.querySelector(".gifsContainer");
    const span = document.querySelector(".count");
    const imgOutput = document.querySelector("#outputIMG");
    const giphyInput = document.querySelector("input");
    const addFavorite = document.querySelector("#addFav")
    const background = document.querySelector(".fullscreen-bg")
    const favHeart = document.querySelector(".as fa-heart")
   

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
        // console.log(result);
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
                let imgList = result[i].embed_url;
                let imgContainer = document.createElement("iframe");
                imgContainer.setAttribute("src", imgList);
                let newH = document.createElement('h4');
                let iFav = document.createElement('i');
                let ifa = document.createElement('i2');
                iFav.innerHTML = favHeart;
                newH.innerHTML = searchTitle;
               // b2.innerHTML = button2;
                div.appendChild(newH);
                //div.appendChild(b2);
                div.appendChild(imgContainer);
                // button.addEventListener('click', async function(){
                // let myFavorite = [];
                // myFavorite.push(searchTitle);
                // console.log(myfavorite);
            //})
        }
    }
        giphyInfo();
    


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (let j = 0; j < myNodelist.length; j++) {
  var span2 = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span2.className = "close";
  span2.appendChild(txt);
  myNodelist[j].appendChild(span2);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span2 = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span2.className ="close";

}
})
}