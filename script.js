document.querySelector(".search-box button").addEventListener("click", () => {
    const APIKey = "857a189d11c4f1c5afd419e188cfb7e5";
    const city = document.querySelector(".search-box input").value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector(".weather-box .weather img");
            const temperature = document.querySelector(".weather-box .temperature");
            const description = document.querySelector(".weather-box .description");
            const humidity = document.querySelector(".weather-details .humidity span");
            const wind = document.querySelector(".weather-details .wind span");
            const weatherBox = document.querySelector(".weather-box");
            const errorBox = document.querySelector(".error-message");

            if (json.cod === "404") {
                weatherBox.style.display = "none";
                errorBox.style.display = "block";
                image.src = "images/404.png";
                console.log("City Not Found: Showing 404 image.");
                return;
            }

            weatherBox.style.display = "block";
            errorBox.style.display = "none";

            console.log("Full API Response:", JSON.stringify(json, null, 2)); 

            temperature.innerHTML = `${Math.round(json.main.temp)}°C`;
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${json.wind.speed} km/h`;

            const weatherConditions = json.weather.map(condition => condition.main.toLowerCase());

            console.log("Weather Conditions:", weatherConditions); 
            const weatherImages = {
                clear: "images/clear.png",
                rain: "images/rain.png",
                snow: "images/snow.png",
                clouds: "images/cloud.png",
                mist: "images/mist.png",
                haze: "images/mist.png",
                smoke: "images/mist.png",
                fog: "images/mist.png"
            };

            
            let selectedImage = "images/cloud.png";
            if (weatherConditions.includes("snow")) {
                selectedImage = "images/snow.png";
            } else {
                for (let condition of weatherConditions) {
                    if (weatherImages[condition]) {
                        selectedImage = weatherImages[condition];
                        break; 
                    }
                }
            }

            console.log("Final Image Path:", selectedImage); 
            image.src = selectedImage;
        })
        .catch(error => console.error("Error fetching weather data:", error));
});


