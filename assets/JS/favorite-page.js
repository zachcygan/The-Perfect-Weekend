var favCtn = [];
var favImg = [];
var favName = [];
var favoritesList = []
var viewBtn = document.querySelectorAll(".viewBtn")

favCtn.push(document.getElementById("fav-ctn-1"));
favName.push(document.getElementById("ctn-name-1"));
favImg.push(document.getElementById("ctn-photo-1"));
favCtn.push(document.getElementById("fav-ctn-2"));
favName.push(document.getElementById("ctn-name-2"));
favImg.push(document.getElementById("ctn-photo-2"));
favCtn.push(document.getElementById("fav-ctn-3"));
favName.push(document.getElementById("ctn-name-3"));
favImg.push(document.getElementById("ctn-photo-3"));

favoritesList = JSON.parse(localStorage.getItem('favorites'));

for(i=0; i < favoritesList.length; i++){
favoritesList = JSON.parse(localStorage.getItem('favorites'));
ctnIndex = 0;
var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/' + favoritesList[i];
fetch(url, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
    }
})

    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        favoritesList += data;
        var img = data.image_url;


        favCtn[ctnIndex].style.display = "block";
        favName[ctnIndex].innerHTML = data.name;
        favImg[ctnIndex].src = img;


        ctnIndex++

        })

    };

// favCtn = document.querySelector("favorite-ctn");

// var section = document.createElement("section");
// var container = document.createElement("div");
// var colMt5 = document.createElement("div");
// var col3Q = document.createElement("div");
// var card1 = document.createElement("div");
// var img = document.createElement("img");
// var cardContent = document.createElement("div");
// var ctnName = document.createElement("p");
// var footer = document.createElement("footer");
// var viewFooter = document.createElement("p");

// section.className = "section";
// section.innerHTML = "HEY"
// section.setAttribute("id", "fav-ctn-1");
// container.className = "container";
// colMt5.className = "colums mt-5 is-8 is-variable"
// col3Q.className = "column is-three-quarters";
// card1.setAttribute("id", "card-1");
// card1.className = "card";
// img.className = "image";
// img.setAttribute("id", "ctn-photo-1");
// cardContent.className = "card-content";
// ctnName.setAttribute("id", "ctn-name-1");
// ctnName.className = "title is-size-2 establish-name";
// footer.className = "card-footer";
// viewFooter.className = "has-text-grey";
// viewFooter.innerText = "View";

 