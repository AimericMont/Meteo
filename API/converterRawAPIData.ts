import {CityWeather} from '../Components/weatherRawApi.type';
import {ForecastData, WeatherDataUsed} from '../Components/weatherData.type';

export const convertrawDataAPI = (rawAPIdata: CityWeather): WeatherDataUsed => {
  const forecastData: ForecastData[] = rawAPIdata.list
    ? rawAPIdata.list.map(item => {
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
    city: rawAPIdata.city ? rawAPIdata.city.name : '',
  };
};
