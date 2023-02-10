
var url = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Irvine&term=sushi&sort_by=best_match&limit=20'

var $foodAndDrinkRec = $('#foodAndDrinkRec');
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
    businessHours.text('Hours: ' );
    businessWebsite.text('Website: ' );
    

    
    businessRating.text('Rating: ' + data.rating + '⭐')
    businessReviews.text('Number of reviews: ' + data.review_count)
    if (data.price === undefined) {
        businessPrice.text('Price: N/A')
    } else {
        businessPrice.text('Price: ' + data.price)
    }
    
    resultTitle.text(data.name);

    imgContainer.append(imgFigure);
    imgFigure.append(resultImg);
    bodyContainer.append(mediaContainer);
    mediaContainer.append(titleContainer);
    bodyContainer.append(contentContainer);
    
// FIX THIS: Append more business info + create cards for reviews

    contentContainer.append(businessAddress);
    contentContainer.append(phoneNumber);
    contentContainer.append(businessHours);
    contentContainer.append(businessWebsite);
    contentContainer.append(businessRating);
    contentContainer.append(businessReviews);
    contentContainer.append(businessPrice);

    titleContainer.append(resultTitle);
    resultCard.append(imgContainer);
    resultCard.append(bodyContainer);
    $foodAndDrinkRec.append(resultCard);
}



//*************** USE THIS TO PULL REVIEWS BY BUSINESS ID ***************// 
// replace location fetch result above with business ID fetch 
// static fetch
var url_bid = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/9R9odrlCdPfppSuN1nIwuw/reviews?limit=20&sort_by=yelp_sort';

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




// dynamic fetch
var url_bid_clicked = 'https://afternoon-badlands-11870.herokuapp.com/https://api.yelp.com/v3/businesses/' + bid_clicked + '/reviews?limit=20&sort_by=yelp_sort';
var bid_clicked = '9R9odrlCdPfppSuN1nIwuw' // use: localStorage.getItem('business-id');
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4HSUlXQrk6K2CdfXtepX9Kd9bTmVhrT7OOi_0m7xJzj92B7XSuHTEwp93qkzz2LZ0PfvapAxEQnB3E6NsThaOAgtJP-myli-rvN0M-a9vhmpwldwJPIJ7rA9aCLgY3Yx'
    }
}

fetch(url_bid, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));







// vvv ************* ADD TO MAIN RESULT *************** //
// access card elements from result page

// var resultsEl = document.getElementsByClassName('custom-card');

//     function resultCardClick(event) {
//         var cardEl = event.target;
//         var businessId = cardEl.id;
      
//         // check if user clicked card w/o business ID
//         if (!businessId){
//             return;
//         } else {
//           // open detail view
//           window.location.href = 'main-result-page-detail-view.html';
//         }
//     }

// user clicks on card element containing choices
// resultsEl.onclick = resultCardClick;

// ^^^ ************* ADD TO MAIN RESULT *************** //    






// **************************** NOTES BELOW ****************************** //

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