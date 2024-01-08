const apiKey = "77ffbce22a0079116e4fffe1aa335a75";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl  + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    
        }else{
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed  + " km/h";
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://i.pinimg.com/564x/10/45/45/104545bccd864ce3f4312e87fad025aa.jpg" 
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://www.pngitem.com/pimgs/m/19-198457_fog-mist-foggy-misty-nebulous-brumous-cloudy-foggy.png"
    }
   else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://i.pinimg.com/564x/b7/a5/5b/b7a55be861bee5c34dec537fcbf68697.jpg"
    }
   else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://i.pinimg.com/564x/a0/23/69/a023698b7cf42698a6d5709ee56451a3.jpg"
    }
   else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4837/4837678.png"
   }

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none"

}
}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})

