// var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20'

var $foodAndDrinkRec = $('#foodAndDrinkRec');
var $resultCard = $('#result')


// **************** FETCH FOR BUSINESS INFO ****************************** //
var bid_clicked = localStorage.getItem('singleCard');
var url_info_clicked = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/' + bid_clicked;

const optionsInfo = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 81MTt_yJi-cbutBj-F-Eu2SQJV4Xery0YuezPwwgO0gDJaPnfSwTCEPKb8qUYsvY9v9ROD7uaTFyfoNNVhJlZsp9A44gl0mzOkBbeE64f9MCUt6Wnwu2kd2ZoxLrY3Yx'
    }
  }
  


  

fetch(url_info_clicked, optionsInfo)
    .then(response => response.json())
    .then(data => {console.log(data); fetchSearchResults(data)})
    .catch(err => console.error(err));

function fetchSearchResults(data) {
    var resultCard = $('<div>');
    var resultTitle = $('<p>');
    var titleContainer = $('<div>');
    var imgContainer = $('<div>');
    var bodyContainer = $('<div>');
    var resultImg = $('<img>');
    var imgFigure = $('<figure>');

    // detail-view
    var contentContainer = $('<div>');
    var mediaContainer = $('<div>');
    var cardImg = data.image_url;

    var businessAddress = $('<div>');
    var phoneNumber = $('<div>');
    var businessHours = $('<div>');
    var businessWebsite = $('<div>');
    var businessReviews = $('<div>');
    var businessRating = $('<div>');
    var businessPrice = $('<div>');
    resultImg.attr('src', cardImg);
    var isOpen = $('<p>');

    // adding carousel //

    console.log(data.photos)
    for ( var i = 0; i < data.photos.length; i++) {
        console.log(data.photos[i])
        var carouselImg = document.createElement('img')
        carouselImg.setAttribute('src', data.photos[i])
        if(i != 0) {
            carouselImg.classList.add('is-hidden')
        }
        imgContainer.append(carouselImg);
    }
    
    $foodAndDrinkRec.addClass(['custom-flex'])
    resultCard.addClass(['card', 'column', 'is-three-fifths', 'is-centered']);
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
    businessHours.text('Hours: ' );
    businessWebsite.text('Website: ' );
    

    
    businessRating.text('Rating: ' + data.rating + '⭐')
    businessReviews.text('Number of reviews: ' + data.review_count)
    if (data.price === undefined) {
        businessPrice.text('Price: N/A')
    } else {
        businessPrice.text('Price: ' + data.price)
    }

    if (!data.is_close) {
        isOpen.text('Currently Open: Yes!')
    } else {
        isOpen.text('Currently Open: No')
    }
    
    resultTitle.text(data.alias);

    // imgContainer.append(imgFigure);
    imgFigure.append(resultImg);
    bodyContainer.append(mediaContainer);
    mediaContainer.append(titleContainer);
    bodyContainer.append(contentContainer);
    
// FIX THIS: Append more business info + create cards for reviews

    contentContainer.append(businessAddress);
    contentContainer.append(phoneNumber);
    // contentContainer.append(businessHours);
    // contentContainer.append(businessWebsite);
    contentContainer.append(businessRating);
    contentContainer.append(businessReviews);
    contentContainer.append(businessPrice);
    contentContainer.append(isOpen)

    titleContainer.append(resultTitle);
    resultCard.append(imgContainer);
    resultCard.append(bodyContainer);
    $foodAndDrinkRec.prepend(resultCard);
}


// **************** FETCH FOR BUSINESS REVIEWS ****************************** //

// var bid_clicked = localStorage.getItem('singleCard');

// dynamic fetch
var url_bid_clicked = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/' + bid_clicked + '/reviews?limit=20&sort_by=yelp_sort';

const optionsRev = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 81MTt_yJi-cbutBj-F-Eu2SQJV4Xery0YuezPwwgO0gDJaPnfSwTCEPKb8qUYsvY9v9ROD7uaTFyfoNNVhJlZsp9A44gl0mzOkBbeE64f9MCUt6Wnwu2kd2ZoxLrY3Yx'
    }
}



// function fetchSearchReviews(data) {
//     var reviewCard = $('<div>');
//     var reviewTitle = $('<p>');
//     var reviewUserRating = $('<p>');
//     var reviewText = $('<p>');
//     var reviewDate = $('<p>');
    
//     reviewCard.addClass(['card', 'column', 'is-three-fifths', 'is-centered', 'custom-card']);
//     reviewTitle.addClass(['title', 'is-7']);
//     reviewUserRating.addClass(['is-7']);
//     reviewText.addClass(['is-7']);
//     reviewDate.addClass(['is-7']);

//     reviewTitle.text('Top Reviews');
//     reviewUserRating.text('Rating: ' + data.reviews[0].rating);
//     reviewText.text('" ' + data.reviews[0].text + ' "' + '   - ' + data.reviews[0].user.name);
//     reviewDate.text( data.reviews[0].time_created);
 

    
//     // FIX THIS: Append more business info + create cards for reviews
//     reviewCard.append(reviewTitle);
//     reviewCard.append(reviewUserRating);
//     reviewCard.append(reviewText);
//     reviewCard.append(reviewDate);
//     $foodAndDrinkRec.append(reviewCard);
// }

fetch(url_bid_clicked, optionsRev)
.then(response => response.json())
.then(data => {console.log(data);

    console.log(data.reviews[0].text);
    fetchSearchReviews2(data);

    })
.catch(err => console.error(err));


function fetchSearchReviews2(data) {

    for (var i = 0; i < data.reviews.length; i++) {

        var reviewCard = $('<div>');
        var reviewTitle = $('<p>');
        var reviewUserRating = $('<p>');
        var reviewText = $('<p>');
        var reviewDate = $('<p>');
        
        
        reviewCard.addClass(['card', 'column', 'is-three-fifths', 'is-centered', 'custom-card']);
        reviewTitle.addClass(['title', 'is-7']);
        reviewTitle.text('Top Reviews');
        reviewUserRating.addClass(['is-7']);
        reviewText.addClass(['is-7']);
        reviewDate.addClass(['is-7']);
        



        reviewUserRating.text('Rating: ' + data.reviews[i].rating);
        reviewText.text('" ' + data.reviews[i].text + ' "' + '   - ' + data.reviews[i].user.name);
        reviewDate.text( data.reviews[i].time_created);

        
    

        
        // FIX THIS: Append more business info + create cards for reviews
        reviewCard.append(reviewTitle);
        reviewCard.append(reviewUserRating);
        reviewCard.append(reviewText);
        reviewCard.append(reviewDate);
        $foodAndDrinkRec.append(reviewCard);
        console.log($foodAndDrinkRec.children())
    }
}







// **************************** NOTES BELOW ****************************** //




//*************** USE THIS TO PULL REVIEWS BY BUSINESS ID ***************// 
// replace location fetch result above with business ID fetch 
// static fetch
// var url_bid = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/9R9odrlCdPfppSuN1nIwuw/reviews?limit=20&sort_by=yelp_sort';

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
//     }
// }

// fetch(url_bid, options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));




// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
//     }
//   };
  
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer Q6RVffAA9x9KUy8rP_jAPoVaANtiJFxGwNXpp9i6gkX9FN1OTDrj1z2fScWav1vxFCsK69eJj4t_CfjbhxhFPX1joqyW8Nn9MZKOvu3pIMm7WhW4YlhH3HtIN13kY3Yx'
//     }
//   };
  
