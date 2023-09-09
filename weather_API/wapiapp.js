const API_KEY = `50459be2e2f3840b355350f86e496668`;
const form = document.querySelector("form");
const search = document.querySelector("#search-box");
const weather = document.querySelector("#weather");

const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = "<h2>CITY NOT FOUND</h2>";
        return;
    }
    
    search.value = data.name;
    weather.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <div class="temp">
            <h2>${data.main.temp} &degC</h2>
            <h3>${data.weather[0].main}</h3>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)

getWeather("Delhi")