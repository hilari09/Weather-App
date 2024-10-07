const apiKey = "e03ce0e40a6ef94d86cd030e42381a22";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const weatherImage = document.getElementById("weathericon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        // document.querySelector(".weather").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        var data = await response.json();
        
        console.log(data);

        
        document.querySelector(".main").innerHTML = data.weather[0].main;
        document.querySelector(".feel_like").innerHTML = Math.round(data.main.feels_like) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        if(data.weather[0].main === "Clouds"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;
            // var target = document.getElementsByClassName("card")[0];
            document.body.style.backgroundImage = "url(clouds.gif)";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "0.6";

            
        }
        else if(data.weather[0].main === "Clear"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;
        
            // var target = document.getElementsByClassName("card")[0];
            document.body.style.backgroundImage = "url(clear.gif)";
            document.body.style.backgroundSize = "100% 150%";
            document.body.style.opacity = "0.6";
        }
        else if(data.weather[0].main === "Drizzle"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;

            // var target = document.getElementsByClassName("card")[0];
            document.body.style.backgroundImage = "url(drizzles.gif)";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "0.6";
        }
        else if(data.weather[0].main === "Mist" || data.weather[0].main === "Dust"|| data.weather[0].main === "Smoke"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;

            // var target = document.getElementsByClassName("card")[0];
            document.body.style.backgroundImage = "url(mist.gif)";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "0.6";
        }
        else if(data.weather[0].main === "Rain"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;

            // var target = document.getElementsByClassName("card")[0];
            document.body.style.backgroundImage = "url(rain.gif)";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "0.6";
        }
        else if(data.weather[0].main === "Snow"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;

            // var target = document.getElementsByClassName("card")[0];
            document.body.style.backgroundImage = "url(snow.gif)";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "0.6";
        }
        else if(data.weather[0].main === "Haze"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;
            document.body.style.backgroundImage = "url(hazee.gif)";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "0.6";
        }
        else if(data.weather[0].main === "Fog"){
            let dataIcon = data.weather[0].icon;
            weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;
            document.body.style.backgroundImage = "url(fog.gif)";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "0.6";
        }
        document.querySelector(".weather").style.display = "unset";
        // document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (e)=>{
    if(e.key === "Enter")
    checkWeather(searchBox.value);
})