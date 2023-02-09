var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20'

var $foodAndDrinkRec = $('#foodAndDrinkRec');
var loadMoreButton = $('<button>')
var $loadMoreContainer = $('#loadMoreButtonContainer')


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
    var cardImg = data.image_url;
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
        
    phoneNumber.text('Phone: ' + data.display_phone);
    businessRating.text('Rating: ' + data.rating + '⭐')
    loadMoreButton.text('Load More');

    if (data.price === undefined) {
        businessPrice.text('Price: N/A')
    } else {
        businessPrice.text('Price: ' + data.price)
    }
    
    businessReviews.text('Number of reviews: ' + data.review_count)
    resultTitle.text(data.name);

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
    $loadMoreContainer.append(loadMoreButton);
}


var resultCard = $('<button>');

var offset = 20;
loadMoreButton.on('click', function() {
    url2 = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20&offset=' + offset;
    
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
// //TEST
// var choiceNode = document.createElement('button');
//     choiceNode.setAttribute('class', 'choice');
                resultCard.addClass(['card', 'column', 'is-one-fifth', 'm-1', 'custom-card']);
                resultCard.setAttribute('id'. resultBtn)
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
    
    function resultCardClick(event) {
        // var cardEl = event.target;
        
        console.log(event);
    }
    
    // user clicks on card element containing choices
    resultCard.on('click', resultCardClick());    
    