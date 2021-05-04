import {CityWeather} from '../Components/weatherRawApi.type';

export const getWeatherFromApi = (): Promise<CityWeather> => {
  const url =
    'http://api.openweathermap.org/data/2.5/forecast?q=Orgerus&appid=fc209cb15fd3756fe140fe6adaf32051';
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};
