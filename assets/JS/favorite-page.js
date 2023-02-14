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
favCtn.push(document.getElementById("fav-ctn-4"));
favName.push(document.getElementById("ctn-name-4"));
favImg.push(document.getElementById("ctn-photo-4"));
favCtn.push(document.getElementById("fav-ctn-5"));
favName.push(document.getElementById("ctn-name-5"));
favImg.push(document.getElementById("ctn-photo-5"));

favoritesList = JSON.parse(localStorage.getItem('favorites'));

for(i=0; i < favoritesList.length; i++){
favoritesList = JSON.parse(localStorage.getItem('favorites'));
ctnIndex = 0;
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
        // console.log(data)
        favoritesList += data;
        var img = data.image_url;


        favCtn[ctnIndex].style.display = "block";
        favName[ctnIndex].innerHTML = data.name;
        favImg[ctnIndex].src = img;
        
        viewBtn[ctnIndex].setAttribute("data-getID", data.id);


        ctnIndex++

        if(!data){
            favCtn.style.display = "none"
        }

        });
    };




    for(i=0; i < viewBtn.length; i++){
        var singleCard = favoritesList[i];
        viewBtn[i].addEventListener('click', function(e){
            // console.dir(e.target)
            localStorage.setItem('singleCard', e.target.dataset.getid);
            // console.log(typeof e.target.dataset.getid)
            location.href = '/main-result-page-detail-view.html'
            
        });
        
    }


 