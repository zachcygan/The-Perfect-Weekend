var apikey = 'b92c7b94ea2bfe103131662778308a84'
var weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Irvine&appid=b92c7b94ea2bfe103131662778308a84'
var cityBaseUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
// var cityUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Irvine&appid=b92c7b94ea2bfe103131662778308a84'
var city;
const searchBtn = document.querySelector('#searchBtn');
const activtyInput = document.querySelector('#activSearch')
var cityInput = document.querySelector('#cityInput');
var modal = document.querySelector('#modal-html')
const modalBg = document.querySelector('#modalBg')

searchBtn.classList.add('js-modal-trigger')
searchBtn.classList.add()

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
    city = cityInput.value
    var acitivty = activtyInput.value;

    getdata()
    location.href='./main-result-page.html'
    
    localStorage.setItem('searchedCity', city);
    localStorage.setItem('searchedActivity', acitivty);
        
});

// console.dir(modal)

// function openModal(el) {
//     el.classList.add('is-active');
// }

// function closeModal() {
//     modal.classList.remove('is-active');
// }

