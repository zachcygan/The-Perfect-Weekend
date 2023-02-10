const date = dayjs().format('MM/DD/YYYY');
const cityWeather = document.querySelector("#City-Weather-ctn");
const cityNameEL = document.querySelector("#cityName");
const weatherIcon = document.querySelector("#weatherIcon");
const currentTemp = document.querySelector("#currentWeather");
const fcCnt = [];
const fcDate = [];
const fcTemp = [];
const fcIcon = [];
const fcDescription = [];
fcCnt.push(document.getElementById("fc1"));
fcCnt.push(document.getElementById("fc2"));
fcDate.push(document.getElementById("fcDate-1"));
fcDate.push(document.getElementById("fcDate-2"));
fcDate.push(document.getElementById("fcDate-3"));
fcIcon.push(document.getElementById("fcIcon-1"));
fcIcon.push(document.getElementById("fcIcon-2"));
fcIcon.push(document.getElementById("fcIcon-3"));
fcTemp.push(document.getElementById("fcTemp-1"));
fcTemp.push(document.getElementById("fcTemp-2"));
fcTemp.push(document.getElementById("fcTemp-3"));
fcDescription.push(document.getElementById("fcDescription-1"));
fcDescription.push(document.getElementById("fcDescription-2"));
fcDescription.push(document.getElementById("fcDescription-3"));

const weatherAPI = fetch('https://api.openweathermap.org/data/2.5/weather?q=San Diego&units=imperial&appid=6b2fe1f5e9c799498a3cb8dcfcab7b18')
.then(function(response){
    if(response.ok){
    return response.json()
    }
}) .then(function(data){
    // console.log(data);
    const { name } = data;
    const { icon } = data.weather[0];
    const { temp } = data.main;

    cityNameEL.innerHTML = name;
    weatherIcon.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    currentTemp.innerHTML = temp + "°F";
})
fetch('https://api.openweathermap.org/data/2.5/forecast?q=San Diego&units=imperial&appid=6b2fe1f5e9c799498a3cb8dcfcab7b18')
.then(function(response){
    return response.json()

}) .then(function(data){
    console.log(data);



var fcEL = 0;
for(i=0; i<data.list.length; i=i+8) {
    fcDate[fcEL].innerHTML = dayjs(data.list[i].dt_txt).format('MM/DD/YY');
    fcIcon[fcEL].src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png"
    fcDescription[fcEL].innerHTML = data.list[i].weather[0].description;
    fcTemp[fcEL].textContent = data.list[i].main.temp + "°F";

    fcEL++
};
});
