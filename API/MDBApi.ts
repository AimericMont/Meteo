export const getWeatherFromApi = () => {
  const url =
    'http://api.openweathermap.org/data/2.5/forecast?q=Orgerus&appid=ce89640df774b3137289687a001b811e';
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

import {CityWeather} from '../Components/rowAPIWeather.type';
import {ForecastData} from '../Components/weatherDataUsed.type';

export const convertRowDataAPI = (rowAPIdata: CityWeather) => {
  const forecastData: ForecastData[] = rowAPIdata.list
    ? rowAPIdata.list.map(item => {
        return {
          id: item.dt,
          tempMin: item.main.temp_min,
          tempMax: item.main.temp_max,
          humidity: item.main.humidity,
          rainPourcent: item.pop,
          timeForecast: item.dt_txt,
          weatherMain: item.weather?.[0].main,
          windSpeed: item.wind.speed,
        };
      })
    : [];

  return {
    forecasts: forecastData,
    city: rowAPIdata.city?.name,
  };
};
