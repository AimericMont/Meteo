import {WeatherDataUsed} from '../Components/weatherData.type';
import {rawData} from '../test/APIRawDataReturnExemple';
import {convertrawDataAPI} from './converterRawAPIData';
//import {getWeatherFromApi} from './MDBApi';

export const getWeatherData = async (): Promise<WeatherDataUsed> => {
  // const weatherApi = await getWeatherFromApi();
  const weatherApi = rawData;
  return convertrawDataAPI(weatherApi);
};
