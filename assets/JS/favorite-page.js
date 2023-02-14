
function createFav() {

favoritesList = JSON.parse(localStorage.getItem('favorites'));


for(i=0; i < favoritesList.length; i++){

var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/' + favoritesList[i];
fetch(url, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 81MTt_yJi-cbutBj-F-Eu2SQJV4Xery0YuezPwwgO0gDJaPnfSwTCEPKb8qUYsvY9v9ROD7uaTFyfoNNVhJlZsp9A44gl0mzOkBbeE64f9MCUt6Wnwu2kd2ZoxLrY3Yx'
    }
})

    .then((response) => response.json())
    .then((data) => {

 var favCtnEl = document.querySelector(".favorite-ctn");
 var favCtn = document.createElement("section");
 var ctn = document.createElement("div");
 var colMt5 = document.createElement("div");
 var col3q = document.createElement("div");
 var card = document.createElement("div");
 var figImg = document.createElement("figure");
 var ctnImg = document.createElement("img");
 var cardContent = document.createElement("div");
 var ctnName = document.createElement("p");
 var cardFooter = document.createElement("footer");
 var footerItem = document.createElement("p");
 var viewBtnEl = document.createElement("button");

 favCtn.className = "section";
 favCtn.setAttribute("id", "fav-ctn")
 ctn.className = "container";
 colMt5.classList.add("colums", "mt-5", "is-8", "is-variable");
 col3q.classList.add("column", "is-three-quarters");
 card.setAttribute("id", "card");
 card.className = "card";
figImg.classList.add("image", "is-square", "fav-img");
ctnImg.className = "image";
ctnImg.setAttribute("id", "ctn-photo");
ctnImg.src = "./assets/images/stock.jpg";
cardContent.className = "card-content";
ctnName.setAttribute("id", "ctn-name-1");
ctnName.classList.add("title", "is-size-4", "establish-name");
ctnName.textContent = "Click the heart Icon to add a favorite!"
cardFooter.className = "card-footer";
footerItem.setAttribute("id", "card-footer-item");
viewBtnEl.classList.add("has-text-grey", "viewBtn");
viewBtnEl.type = "button";
viewBtnEl.textContent = "View";

favCtnEl.append(favCtn);

favCtn.append(ctn);
ctn.append(colMt5);
colMt5.append(col3q);
col3q.append(card);
card.append(figImg, cardContent, cardFooter);
figImg.append(ctnImg);
// card.append(cardContent);
cardContent.append(ctnName);
// card.append(cardFooter);
cardFooter.append(footerItem);
footerItem.append(viewBtnEl);

        favoritesList += data;
        var img = data.image_url;

        ctnName.innerHTML = data.name;
        ctnImg.src = img;
        
        viewBtnEl.setAttribute("data-getID", data.id);
        viewBtnEl.addEventListener("click", function(e){

            localStorage.setItem('singleCard', e.target.dataset.getid);
            location.href = './main-result-page-detail-view.html'
        });   
        });
    };
};
createFav();
