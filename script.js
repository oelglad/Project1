const DOMAIN = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = "OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR";

//const BASE_URL = 'http://api.giphy.com/v1/gifs/search?q=clothes&api_key=OBQh5OZ0RsNCkK49aqNORvPMstxE2WcR&limit=1'

//<input type="text" name="clothes" value="" placeholder="clothes" id="clothes">
window.onload = function () {

    const button = document.querySelector("button")
    const clickedElement = document.querySelector('#blank')
    console.log(clickedElement);
    const searchDiv = document.querySelector(".search-section")
    const div = document.querySelector(".Giphy-list")
    const imgOutput = document.querySelector("#outputIMG");


    button.addEventListener('click', async function (evt) {
        const clickedElement = evt.target;
        const response = await axios.get(`${DOMAIN}${searchDiv}&api_key=${API_KEY}`);
        let result = response.data.data;
        console.log(result);


        function giphyInfo() {
            for (let i = 0; i < result.length; i++) {
                if (i < 5) {
                    let searchTitle = result[i].title;
                    let pagination = result[i].embed_url;
                    console.log(pagination);
                    let imgContainer = document.createElement("iframe");
                    imgContainer.setAttribute("src", pagination);
                    console.log(imgContainer);
                    let newH2 = document.createElement('h2');
                   // let para = document.createElement('p');

                    newH2.innerHTML = searchTitle;
                    div.appendChild(newH2);
                    imgOutput.appendChild(imgContainer);

                } else {
                    console.log("done!");
                }
            }
        }
        giphyInfo();
    })
}

// id: "EyIPL8j0LgYso"
//title: "clean clothes GIF"
//data.pagination.total_count: 35525
