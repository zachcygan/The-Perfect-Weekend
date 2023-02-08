var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20'
var url2 = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/P76bdceIwmVe4F7OVhfTYA/reviews'
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

        var locationLat = data.businesses[0].coordinates.latitude;
        var locationLon = data.businesses[0].coordinates.longitude;

        for(var i = 0; i < data.businesses.length; i++) {
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
            var cardImg = data.businesses[i].image_url;
            resultImg.attr('src', cardImg);
            
            resultCard.addClass(['card', 'column', 'is-3', 'm-1']);
            resultImg.addClass(['image']);
            imgFigure.addClass(['image', 'is-4by3'])
            imgContainer.addClass('card-image');
            bodyContainer.addClass('card-content');
            titleContainer.addClass(['media-content']);
            mediaContainer.addClass('media');
            resultTitle.addClass(['title', 'is-4'])
            contentContainer.addClass('content');
            
            phoneNumber.text('Phone: ' + data.businesses[i].display_phone);
            businessRating.text('Rating: ' + data.businesses[i].rating + '⭐')
            businessPrice.text('Price: ' + data.businesses[i].price)
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
    
            
        })