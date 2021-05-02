const API_TOKEN = "ce89640df774b3137289687a001b811e"

export function getWeatherFromApi(){
    const url ='pro.openweathermap.org/data/2.5/forecast/hourly?q=London&appid=' + API_TOKEN
    //const url ='pro.openweathermap.org/data/2.5/forecast/hourly?q=London,us&mode=json&appid=' + API_TOKEN
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}