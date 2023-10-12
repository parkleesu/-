const API_KEY ="d96dbb1757a1459226d68031116945b2";

function onGeoOk(position){

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const id = document.getElementById("weather");
id.style.color = "black";
id.style.fontSize = "2.5em";
id.style.fontWeight = "bold";
id.style.display = "flex";
id.style.alignItems = "center";
id.style.justifyContent = "center";