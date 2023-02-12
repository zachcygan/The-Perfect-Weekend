var city = localStorage.getItem('searchedCity');
var activity = localStorage.getItem('searchedActivity')

var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&term=' + activity + '&sort_by=best_match&limit=20'

var $foodAndDrinkRec = $('#foodAndDrinkRec');
var loadMoreButton = $('<button>')
var loadMoreContainer = $('#loadMoreButtonContainer')
var $resultCard = $('#result')



fetch(url, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
    }
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        for(var i = 0; i < data.businesses.length; i++) {
            fetchSearchResults(data.businesses[i])
        }
        
        if(data.businesses.length < 20) {
            loadMoreContainer.addClass('is-hidden')
        }
})

function fetchSearchResults(data) {
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
    var heartContainer = $('<div>');
    var heartButton = $('<button>');
    var cardImg = data.image_url;
    resultImg.attr('src', cardImg);
        
    $foodAndDrinkRec.addClass(['custom-flex'])
    resultCard.addClass(['card', 'column', 'is-one-fifth', 'm-1', 'custom-card']);
    //TEST
    // resultCard.add('id'. resultBtn)
    resultImg.addClass(['image']);
    imgFigure.addClass(['image', 'is-4by3'])
    imgContainer.addClass('card-image');
    bodyContainer.addClass('card-content');
    titleContainer.addClass(['media-content']);
    titleContainer.css('min-height', '30%')
    mediaContainer.addClass(['media']);
    resultTitle.addClass(['title', 'is-5'])
    contentContainer.addClass('content');
    loadMoreButton.addClass(['button', 'is-normal', 'is-focus', 'is-success'])
    heartContainer.addClass('h-7');
    heartButton.addClass('custom-heart');
        
    phoneNumber.text('Phone: ' + data.display_phone);
    businessRating.text('Rating: ' + data.rating + '⭐');
    loadMoreButton.text('Load More');
    heartButton.text('♡')

    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    for(var i = 0; i < favorites.length; i++) {
        if(data.id === favorites[i]) {
            heartButton.text('❤️')
        }
    }

    if (data.price === undefined) {
        businessPrice.text('Price: N/A')
    } else {
        businessPrice.text('Price: ' + data.price)
    }
    
    businessReviews.text('Number of reviews: ' + data.review_count)
    resultTitle.text(data.name);
    resultCard.attr('id', data.id)
    heartButton.attr('id', data.id)

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
    heartContainer.append(heartButton);
    resultCard.append(imgContainer);
    resultCard.append(bodyContainer);
    resultCard.append(heartContainer);
    $foodAndDrinkRec.append(resultCard);
    loadMoreContainer.append(loadMoreButton);

    heartButton.click({id: data.id}, saveFavorite)
    resultCard.on('click', function(event) {
        console.log(data)
        var singleCard = data.id;

        localStorage.setItem('singleCard', singleCard);
    })
}


var resultCard = $('<button>');

var offset = 20;
loadMoreButton.on('click', function() {
    url2 = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&term=' + activity + '&sort_by=best_match&limit=20&offset=' + offset;
    
    fetch(url2, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            offset += 20;

            for(var i = 0; i < data.businesses.length; i++) {              
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

                resultCard.addClass(['card', 'column', 'is-one-fifth', 'm-1', 'custom-card']);
                resultImg.addClass(['image']);
                imgFigure.addClass(['image', 'is-4by3'])
                imgContainer.addClass('card-image');
                bodyContainer.addClass('card-content');
                titleContainer.addClass(['media-content']);
                titleContainer.css('min-height', '30%')
                mediaContainer.addClass(['media']);
                resultTitle.addClass(['title', 'is-4'])
                contentContainer.addClass('content');
                loadMoreButton.add(['button', 'is-normal', 'is-focus', 'is-success'])
                    
                phoneNumber.text('Phone: ' + data.businesses[i].display_phone);
                businessRating.text('Rating: ' + data.businesses[i].rating + '⭐')
                loadMoreButton.text('Load More');

                if (data.businesses[i].price === undefined) {
                    businessPrice.text('Price: N/A')
                } else {
                    businessPrice.text('Price: ' + data.businesses[i].price)
                }

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
                $foodAndDrinkRec.append(resultCard);
            }
        }) 
    })

    


    // ADD TO MAIN RESULT
    // access card elements from result page
    // var resultsEl = document.getElementsByClassName('custom-card');
    
    // function resultCardClick(event) {
    //     // var cardEl = event.target;
        
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
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(typeof favorites)
    var foundId = false;
    
    if(favorites.length >= 1) {
        for(var i = 0; i < favorites.length; i++) {
            if(event.data.id === favorites[i]) {
                console.log('found: ' + favorites[i])
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
var bestMatchBtn = $('.best-match');
var priceLowBtn = $('.price-low-high');
var priceHighBtn = $('.price-high-low');
var byRatingBtn = $('.sort-rating');
var byReviewBtn = $('.sort-review');

//  re-fetch 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&term=' + activity + sort + price + '&limit=20' 
var sortBy = function() {

    fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

    bestMatchBtn.addEventListener('click', ()=> {
        sort = "&sort_by=best_match";
        getdata()
    })
    priceLowBtn.addEventListener('click', ()=> {
        sort = "&sort_by=1,2,3,4";
        getdata()
    })
    priceHighBtn.addEventListener('click', ()=> {
        sort = "&sort_by=4,3,2,1";
        getdata()
    })
    byRatingBtn.addEventListener('click', ()=> {
        sort = "&sort_by=rating";
        getdata()
    })
    byReviewBtn.addEventListener('click', ()=> {
        sort = "&sort_by=review_count";
        getdata()
    })

}
)}

// &price=1,2,3,4
//&sort_by=rating
//sort_by=review_count


