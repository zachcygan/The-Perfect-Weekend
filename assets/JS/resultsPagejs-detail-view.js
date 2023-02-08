var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20'

var $foodAndDrinkRec = $('#foodAndDrinkRec');


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


// FIX THIS: Add event lister to update "i" based on user click
    var i = 1

            fetchSearchResults(data.businesses[i])
        
    })

function fetchSearchResults(data) {
    var resultCard = $('<div>');
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
    var businessAddress = $('<div>');
    var cardImg = data.image_url;
    resultImg.attr('src', cardImg);
   
    
    $foodAndDrinkRec.addClass(['custom-flex'])
    resultCard.addClass(['card', 'column', 'is-three-fifths', 'is-centered', 'custom-card']);
    resultImg.addClass(['image']);
    imgFigure.addClass(['image', 'is-4by3'])
    imgContainer.addClass('card-image');
    bodyContainer.addClass('card-content');
    titleContainer.addClass(['media-content']);
    titleContainer.css('min-height', '30%')
    mediaContainer.addClass(['media']);
    resultTitle.addClass(['title', 'is-4'])
    contentContainer.addClass('content');
        
    businessAddress.text('Address: ' + data.location.display_address[0] + ' ' + data.location.display_address[1] + ' ' + data.location.display_address[2] )
    phoneNumber.text('Phone: ' + data.display_phone);
    businessRating.text('Rating: ' + data.rating + '⭐')

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

    contentContainer.append(businessAddress);
    contentContainer.append(phoneNumber);
    contentContainer.append(businessRating);
    contentContainer.append(businessReviews);
    contentContainer.append(businessPrice);
    
    titleContainer.append(resultTitle);
    resultCard.append(imgContainer);
    resultCard.append(bodyContainer);
    $foodAndDrinkRec.append(resultCard);
}

// var offset = 20;
//     url2 = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20&offset=' + offset;
    
//     fetch(url2, {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
//         }
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//             offset += 20;

//             for(var i = 0; i < data.businesses.length; i++) {              
//                 var resultCard = $('<div>');
//                 var resultTitle = $('<p>');
//                 var titleContainer = $('<div>');
//                 var imgContainer = $('<div>');
//                 var bodyContainer = $('<div>');
//                 var resultImg = $('<img>');
//                 var imgFigure = $('<figure>');
//                 var phoneNumber = $('<div>');
//                 var businessRating = $('<div>');
//                 var mediaContainer = $('<div>');
//                 var businessPrice = $('<div>');
//                 var contentContainer = $('<div>');
//                 var businessReviews = $('<div>');
//                 var cardImg = data.businesses[i].image_url;
//                 resultImg.attr('src', cardImg);
                    
//                 $foodAndDrinkRec.addClass(['custom-flex'])
//                 resultCard.addClass(['card', 'column', 'is-one-fifth', 'm-1', 'custom-card']);
//                 resultImg.addClass(['image']);
//                 imgFigure.addClass(['image', 'is-4by3'])
//                 imgContainer.addClass('card-image');
//                 bodyContainer.addClass('card-content');
//                 titleContainer.addClass(['media-content']);
//                 titleContainer.css('min-height', '30%')
//                 mediaContainer.addClass(['media']);
//                 resultTitle.addClass(['title', 'is-4'])
//                 contentContainer.addClass('content');
                    
//                 phoneNumber.text('Phone: ' + data.businesses[i].display_phone);
//                 businessRating.text('Rating: ' + data.businesses[i].rating + '⭐')
//                 loadMoreButton.text('Load More');

//                 if (data.businesses[i].price === undefined) {
//                     businessPrice.text('Price: N/A')
//                 } else {
//                     businessPrice.text('Price: ' + data.businesses[i].price)
//                 }

//                 businessReviews.text('Number of reviews: ' + data.businesses[i].review_count)
//                 resultTitle.text(data.businesses[i].name);

//                 imgContainer.append(imgFigure);
//                 imgFigure.append(resultImg);
//                 bodyContainer.append(mediaContainer);
//                 mediaContainer.append(titleContainer);
//                 bodyContainer.append(contentContainer);
//                 contentContainer.append(phoneNumber);
//                 contentContainer.append(businessRating);
//                 contentContainer.append(businessReviews);
//                 contentContainer.append(businessPrice);
//                 titleContainer.append(resultTitle);
//                 resultCard.append(imgContainer);
//                 resultCard.append(bodyContainer);
//                 $foodAndDrinkRec.append(resultCard);
//             }
//         }) 
