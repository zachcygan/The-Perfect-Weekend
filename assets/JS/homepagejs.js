var apikey = 'b92c7b94ea2bfe103131662778308a84'
var weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Irvine&appid=b92c7b94ea2bfe103131662778308a84'
var cityBaseUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
// var cityUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Irvine&appid=b92c7b94ea2bfe103131662778308a84'
var city = 'Irvine';
const searchBtn = document.querySelector('#searchBtn');
const cityInput = document.querySelector('#cityInput');

function getdata() {
    fetch(`${cityBaseUrl}${city}&appid=${apikey}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })

fetch(`${weatherBaseUrl}${city}&appid=${apikey}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}


searchBtn.addEventListener('click', () => {
    // location.href='./main-result-page.html'
    city = cityInput.value
    getdata()
});
    

    