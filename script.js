const container = document.querySelector(".container");
const search = document.querySelector(".search_box");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click",() => {
    const APIkey = "863856e601fa1712bd9a7ed93ac5b1f2";
    const city = document.querySelector(".search_box input").ariaValueMax;

    if (city == "")
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json().then(json => { 

        const image = document.querySelector(".weather-box img");
        const temperature = document.querySelector(".weather-box .temperature");
        const description = document.querySelector(".weather-box .description");
        const humidity = document.querySelector(".weather-details .humidity span");
        const wind = document.querySelector(".weather-details .wind span");

    }))
});