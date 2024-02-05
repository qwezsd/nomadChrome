const API_KEY = '76d8cfbbed2ca0819b23028f2088602f'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child")
        weather.innerText = `${data.main.temp}°C   ${data.name}`
    });
}
function onGeoError(){
    alert("못 찾음")
}
 
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError )
// getcurrentPosition은 뭐든게 잘 됐을 때의 인자, 두번째는 안 됐을 때 인자