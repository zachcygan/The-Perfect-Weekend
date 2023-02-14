var city = localStorage.getItem('searchedCity');
var activity = localStorage.getItem('searchedActivity')

var url = getUrl();

var $foodAndDrinkRec = $('#foodAndDrinkRec');
var loadMoreButton = $('<button>')
var loadMoreContainer = $('#loadMoreButtonContainer')
var $resultCard = $('#result')
var $cityInput = $('#cityInput');
var $activSearch = $('#activSearch');

$cityInput.attr('value', city)
$activSearch.attr('value', activity)

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

        for (var i = 0; i < data.businesses.length; i++) {
            fetchSearchResults(data.businesses[i])
        }
    })

function addHeart(id) {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    var heartContainer = $('<div>');
    var heartButton = $('<button>');

    heartContainer.addClass('h-7');
    heartButton.addClass('custom-heart');

    heartButton.text('♡')

    for (var i = 0; i < favorites.length; i++) {
        if (id === favorites[i]) {
            heartButton.text('❤️')
        }
    }

    heartButton.attr('id', id)

    heartContainer.append(heartButton);

    heartButton.click({ id: id }, saveFavorite);

    return heartContainer;
}

function fetchSearchResults(data) {
    var heartContainer = addHeart(data.id)
    var resultCard = $('<button>');
    var resultTitle = $('<p>');
    var titleContainer = $('<div>');
    var imgContainer = $('<div>');
    var bodyContainer = $('<div>');
    var resultImg = $('<img>');
    var imgFigure = $('<figure>');
    var phoneNumber = $('<div>');
    var businessRating = $('<div>');
    var mediaContainer = $('<div>');
    var businessPrice = $('<div>');
    var contentContainer = $('<div>');
    var businessReviews = $('<div>');

    var cardImg = data.image_url;
    resultImg.attr('src', cardImg);

    $foodAndDrinkRec.addClass(['custom-flex'])
    resultCard.addClass(['card', 'column', 'is-one-fifth-desktop', 'm-1', 'custom-card', 'is-four-fifths-mobile', 'is-size-2-mobile', 'is-two-fifths-tablet']);
    //TEST
    // resultCard.add('id'. resultBtn)
    resultImg.addClass(['image']);
    imgFigure.addClass(['image', 'is-4by3'])
    imgContainer.addClass('card-image');
    bodyContainer.addClass('card-content');
    titleContainer.addClass(['media-content']);
    titleContainer.css('min-height', '30%')
    mediaContainer.addClass(['media']);
    resultTitle.addClass(['title', 'is-4'])
    contentContainer.addClass('content');


    phoneNumber.text('Phone: ' + data.display_phone);
    businessRating.text('Rating: ' + data.rating + '⭐');

    resultCard.on('click', function () {
        location.href = '/main-result-page-detail-view.html'
    })

    if (data.price === undefined) {
        businessPrice.text('Price: N/A')
    } else {
        businessPrice.text('Price: ' + data.price)
    }

    businessReviews.text('Number of reviews: ' + data.review_count)
    resultTitle.text(data.name);
    resultCard.attr('id', data.id)

    imgContainer.append(imgFigure);
    imgFigure.append(resultImg);
    bodyContainer.append(mediaContainer);
    mediaContainer.append(titleContainer);
    bodyContainer.append(contentContainer);
    contentContainer.append(phoneNumber);
    contentContainer.append(businessRating);
    contentContainer.append(businessReviews);
    contentContainer.append(businessPrice);
    titleContainer.append(resultTitle);

    resultCard.append(imgContainer);
    resultCard.append(bodyContainer);
    resultCard.append(heartContainer);
    $foodAndDrinkRec.append(resultCard);


    resultCard.on('click', function (event) {
        var singleCard = data.id;

        localStorage.setItem('singleCard', singleCard);
        console.log(singleCard);

    })
}

// grabbed from https://stackoverflow.com/questions/13057910/load-more-content-when-user-scrolls-near-bottom-of-page
$(window).scroll(function () { 
    if (Math.trunc($(window).scrollTop()) == Math.trunc($(document).height()) - Math.trunc($(window).height())) {

        loadMore();
    }
});


var resultCard = $('<button>');



var offset = 20;

function loadMore() {
    url = getUrl();

    fetch(url + '&offset=' + offset, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 81MTt_yJi-cbutBj-F-Eu2SQJV4Xery0YuezPwwgO0gDJaPnfSwTCEPKb8qUYsvY9v9ROD7uaTFyfoNNVhJlZsp9A44gl0mzOkBbeE64f9MCUt6Wnwu2kd2ZoxLrY3Yx'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            offset += 20;

            for (var i = 0; i < data.businesses.length; i++) {
                var heartContainer = addHeart(data.businesses[i].id)
                var resultCard = $('<button>');
                var resultTitle = $('<p>');
                var titleContainer = $('<div>');
                var imgContainer = $('<div>');
                var bodyContainer = $('<div>');
                var resultImg = $('<img>');
                var imgFigure = $('<figure>');
                var phoneNumber = $('<div>');
                var businessRating = $('<div>');
                var mediaContainer = $('<div>');
                var businessPrice = $('<div>');
                var contentContainer = $('<div>');
                var businessReviews = $('<div>');
                var cardImg = data.businesses[i].image_url;
                resultImg.attr('src', cardImg);

                $foodAndDrinkRec.addClass(['custom-flex'])

                resultCard.addClass(['card', 'column', 'is-one-fifth-desktop', 'm-1', 'custom-card', 'is-full-mobile', 'is-size-2-mobile', 'is-two-fifths-tablet']);
                resultImg.addClass(['image']);
                imgFigure.addClass(['image', 'is-4by3'])
                imgContainer.addClass('card-image');
                bodyContainer.addClass('card-content');
                titleContainer.addClass(['media-content']);
                titleContainer.css('min-height', '30%')
                mediaContainer.addClass(['media']);
                resultTitle.addClass(['title', 'is-4'])
                contentContainer.addClass('content');

                phoneNumber.text('Phone: ' + data.businesses[i].display_phone);
                businessRating.text('Rating: ' + data.businesses[i].rating + '⭐')

                if (data.businesses[i].price === undefined) {
                    businessPrice.text('Price: N/A')
                } else {
                    businessPrice.text('Price: ' + data.businesses[i].price)
                }

                resultCard.on('click', function () {
                    location.href = '/main-result-page-detail-view.html'
                })

                businessReviews.text('Number of reviews: ' + data.businesses[i].review_count)
                resultTitle.text(data.businesses[i].name);

                imgContainer.append(imgFigure);
                imgFigure.append(resultImg);
                bodyContainer.append(mediaContainer);
                mediaContainer.append(titleContainer);
                bodyContainer.append(contentContainer);
                contentContainer.append(phoneNumber);
                contentContainer.append(businessRating);
                contentContainer.append(businessReviews);
                contentContainer.append(businessPrice);
                titleContainer.append(resultTitle);
                resultCard.append(imgContainer);
                resultCard.append(bodyContainer);
                resultCard.append(heartContainer);
                $foodAndDrinkRec.append(resultCard);
            }
        })
}

// ADD TO MAIN RESULT
// access card elements from result page
// var resultsEl = document.getElementsByClassName('custom-card');

// function resultCardClick(event) {
//     // var cardEl = event.target;
//     var bid_clicked localStorage.setItem('business-id', businessId); //set
//     console.log(event);
// }

// user clicks on card element containing choices
// resultCard.onclick = resultCardClick;    
// resultCard.on('click', resultCardClick());    


// resultCard.on('click', function() {
//     console.log("clicked");
// })

function saveFavorite(event) {
    // console.log(event)
    event.stopPropagation();
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    var foundId = false;

    if (favorites.length >= 1) {
        for (var i = 0; i < favorites.length; i++) {
            if (event.data.id === favorites[i]) {
                favorites.splice(i, 1);
                foundId = true;


                break
            }
        }
    }

    if (!foundId) {
        favorites.push(event.data.id);

        event.currentTarget.textContent = '❤️';
    } else {
        event.currentTarget.textContent = '♡';
    }

    console.log(event)

    localStorage.setItem('favorites', JSON.stringify(favorites))



}

// filter function
var sort;
var sortPrice;
var bestMatchBtn = $('.best-match');
var priceLowBtn = $('.price-low-high');
var priceHighBtn = $('.price-high-low');
var byRatingBtn = $('.sort-rating');
var byReviewBtn = $('.sort-review');

bestMatchBtn.on('click', () => {
    sort = "best_match";
    sortBy();
})
byRatingBtn.on('click', () => {
    sort = "rating";
    sortBy();
})
byReviewBtn.on('click', () => {
    sort = "review_count";
    sortBy();
})

priceLowBtn.on('click', () => {
    sortPrice = "1,2";
    sortBy();
})
priceHighBtn.on('click', () => {
    sortPrice = "4,3";
    sortBy();
})


var sortBy = function () {
    var url = getUrl();
    console.log(url)
    fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 81MTt_yJi-cbutBj-F-Eu2SQJV4Xery0YuezPwwgO0gDJaPnfSwTCEPKb8qUYsvY9v9ROD7uaTFyfoNNVhJlZsp9A44gl0mzOkBbeE64f9MCUt6Wnwu2kd2ZoxLrY3Yx'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            $foodAndDrinkRec.empty()


            for (var i = 0; i < data.businesses.length; i++) {
                fetchSearchResults(data.businesses[i]);
            }

        }
        )
}





 function getUrl(){
    var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?';

    if(city){
        url += `location=${city}`;
    }

    if(activity){
        url += `&term=${activity}`;
    }

    if(sort){
        url += `&sort_by=${sort}`
    }

    if(sortPrice){
        url += `&price=${sortPrice}`
    }

    // if(offset){
    //     url += `&offset=${offset}`
    // }

    url += '&limit=20'

    


    return url

}
