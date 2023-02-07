let key = "969c4a5f85b4307b42b2ddcb630eda9d"

function viewScreen(serverData){
    document.querySelector(".city").innerHTML = serverData.name + " in weather"
    document.querySelector(".temperature").innerHTML = Math.floor(serverData.main.temp) + "°C"
    document.querySelector(".description").innerHTML = serverData.weather[0].description
    //document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${serverData.weather[0].icon}.png`
    // document.querySelector(".humidity").innerHTML = serverData.main.humidity

    console.log(`https://openweathermap.org/img/wn/${serverData.weather[0].icon}.png`);
}

async function searchCity(city){
    let requisition = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    encodeURI(city) + 
    "&appid=" + 
    key + 
    "&lang=pt_br" + 
    "&units=metric");
    
    let serverData = await requisition.json();

    viewScreen(serverData)
}

function clickButton(){
    let city = document.querySelector(".input-city").value
    
    searchCity(city)
}
