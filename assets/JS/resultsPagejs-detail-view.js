// var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20'

var city = localStorage.getItem('searchedCity');
var activity = localStorage.getItem('searchedActivity')

var $foodAndDrinkRec = $('#foodAndDrinkRec');
var $resultCard = $('#result')
var $searchButton = $('#searchBtn');
var $city = $('#cityInput');
var $activity = $('#activSearch')
var bodyContainer = $('<div>');
var index = 0;

$city.attr('value', city);
$activity.attr('value', activity)

// Business ID set from Main Results Page' JS 

$searchButton.on('click', function() {
    city = $city.val();
    activity = $activity.val();

    localStorage.setItem('searchedCity', city);
    localStorage.setItem('searchedActivity', activity);
    location.href = './main-result-page.html'
})

// **************** FETCH FOR BUSINESS INFO ****************************** //
var bid_clicked = localStorage.getItem('singleCard');


// **************** FETCH INFO FOR BUSINESS DETAILS ****************************** //
var url_info_clicked = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/' + bid_clicked;

const optionsInfo = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 81MTt_yJi-cbutBj-F-Eu2SQJV4Xery0YuezPwwgO0gDJaPnfSwTCEPKb8qUYsvY9v9ROD7uaTFyfoNNVhJlZsp9A44gl0mzOkBbeE64f9MCUt6Wnwu2kd2ZoxLrY3Yx'
    }
  }
  

// **************** FETCH INFO FOR BUSINESS REVIEWS ****************************** //
var url_bid_clicked = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/' + bid_clicked + '/reviews?limit=20&sort_by=yelp_sort';

const optionsRev = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 81MTt_yJi-cbutBj-F-Eu2SQJV4Xery0YuezPwwgO0gDJaPnfSwTCEPKb8qUYsvY9v9ROD7uaTFyfoNNVhJlZsp9A44gl0mzOkBbeE64f9MCUt6Wnwu2kd2ZoxLrY3Yx'
    }
}



// **************** FETCH CALL FOR DETAIL VIEW  ****************************** //
fetch(url_info_clicked, optionsInfo)
    .then(response => response.json())
    .then(data => {
        //FETCH Single Card - Seaarch Results 
        console.log(data);
        fetchSearchResults(data);

       //FETCH Single Card - Images  
        bulmaCarousel.attach('#card-image-container', {
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true
        });

       //FETCH Reviews Card - Top 3 Reviews 
        fetch(url_bid_clicked, optionsRev)
            .then(response => response.json())
            .then(data => {
                //FETCH Reviews Card - Top Reviews 
                // console.log(data);
                fetchSearchReviews2(data);

                })
            .catch(err => console.error(err));
    })
    .catch(err => console.error(err));


// **************** FETCH FUNCTIONS FOR DETAIL VIEW  ****************************** //
function fetchSearchResults(data) {
    // CREATES ELEMENTS: Needed for search results in Single Card
    var resultCard = $('<div>');
    var resultTitle = $('<a>');
    var titleContainer = $('<div>');
    var imgContainer = $('<div>');
    var imgCarousel = $('<div>');
    var resultImg = $('<img>');
    var imgFigure = $('<figure>');

    // detail-view
    var contentContainer = $('<div>');
    var mediaContainer = $('<div>');
    var mediaContentContainer = $('<div>');
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


    // ADDS TO ELEMENTS: Needed for search results in Single Card
    // adding carousel //
    // console.log(data.photos)
    for ( var i = 0; i < data.photos.length; i++) {
        // console.log(data.photos[i])
        var itemDiv = $('<figure>')
        itemDiv.addClass(['item-' + (i+1), 'image', 'is-4by3'])
        itemDiv.css('text-align', 'center');
        itemDiv.css('width', '100%')

        var carouselImg = $('<img>')
        carouselImg.attr('src', data.photos[i])
        carouselImg.css('object-fit', 'cover')
        // if(i != 0) {
        //     carouselImg.classList.add('is-hidden')
        // }
        itemDiv.append(carouselImg)
        imgCarousel.append(itemDiv);
    }

    
    
    $foodAndDrinkRec.addClass(['custom-flex'])
    resultCard.addClass(['card', 'column', 'is-three-fifths', 'is-centered', 'custom-margin']);
    resultImg.addClass(['image']);
    imgFigure.addClass(['image', 'is-4by3'])
    imgCarousel.attr('id', 'card-image-container');
    imgCarousel.addClass('carousel card-image')
    // imgContainer.addClass('card-image');
    imgContainer.append(imgCarousel)
    imgContainer.css('overflow', 'hidden')

    bodyContainer.addClass('card-content');
    titleContainer.addClass(['media-content']);
    titleContainer.css('min-height', '30%')
    mediaContainer.addClass(['media']);
    resultTitle.addClass(['title', 'is-4'])
    resultTitle.attr('href', data.url);
    resultTitle.attr('target', 'blank');
    contentContainer.addClass('content');
        

    // POPULATES ELEMENTS:
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

    if (data.is_closed === false) {
        isOpen.text('Currently Open: Yes!')
    } else {
        isOpen.text('Currently Open: No')
    }
    
    resultTitle.text(data.name);


    // APPENDS ELEMENTS:
    // imgContainer.append(imgFigure);
    imgFigure.append(resultImg);
    mediaContainer.append(titleContainer);


    mediaContentContainer.append(mediaContainer);
    mediaContentContainer.append(contentContainer);
    mediaContentContainer.css('margin-bottom', '20px')
    bodyContainer.append(mediaContentContainer)
    
    // Append more business info + create cards for reviews
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
    $foodAndDrinkRec.append(resultCard);
}


function fetchSearchReviews2(data) {

    for (var i = 0; i < data.reviews.length; i++) {

        var reviewCard = $('<div>');
        var reviewTitle = $('<p>');
        var reviewUserRating = $('<p>');
        var reviewText = $('<p>');
        var reviewDate = $('<p>');
        
        
        reviewCard.addClass(['card', 'column', 'is-three-fifths', 'is-centered', 'custom-card', 'no-hover']);
        reviewTitle.addClass(['title', 'is-7']);
        reviewUserRating.addClass(['is-7']);
        reviewText.addClass(['is-7']);
        reviewDate.addClass(['is-7']);
        
        reviewTitle.text('Top Reviews');
        reviewUserRating.text('Rating: ' + data.reviews[i].rating + '⭐');
        reviewText.text('" ' + data.reviews[i].text + ' "' + '   - ' + data.reviews[i].user.name);
        reviewDate.text( data.reviews[i].time_created);

        
    

        
        // FIX THIS: Append more business info + create cards for reviews
        reviewCard.append(reviewTitle);
        reviewCard.append(reviewUserRating);
        reviewCard.append(reviewText);
        reviewCard.append(reviewDate);
        $foodAndDrinkRec.append(reviewCard);

    }
}


// EVENT LISTENERS 

$searchButton.on('click', function() {
    city = $city.val();
    activity = $activity.val();

    localStorage.setItem('searchedCity', city);
    localStorage.setItem('searchedActivity', activity);
    location.href = './main-result-page.html'
})






// **************************** NOTES BELOW ****************************** //
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

// fetch(url_bid_clicked, optionsRev)
// .then(response => response.json())
// .then(data => {console.log(data);

//     console.log(data.reviews[0].text);
//     fetchSearchReviews2(data);

//     })
// .catch(err => console.error(err));



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
  
