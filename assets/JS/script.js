fetch('http://api.openweathermap.org/geo/1.0/zip?zip=92656&appid=e8a270e40a2a6e92a5d07f8866774c6d')
.then(function(response){
    return response.json()
}) .then(function(data){
    console.log(data);
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=San Diego&appid=e8a270e40a2a6e92a5d07f8866774c6d')
.then(function(response){
    return response.json()
}) .then(function(data){
    console.log(data);
})