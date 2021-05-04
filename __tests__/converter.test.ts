import {openWeatherResponseToWeather} from '../API/openWeatherResponseToWeather';

import {WeatherDataUsed} from '../Components/weatherData.type';
import {CityWeather} from '../Components/weatherRawApi.type';

import {rawDataMock} from '../test/rawDataForTest';
import {dataWeather} from '../test/dataForTest';
const rawDataEmpty: CityWeather = {
  cod: '',
  message: 0,
  cnt: 0,
  list: null,
  city: null,
};

const dataEmpty: WeatherDataUsed = {
  city: '',
  forecasts: [],
};

describe('converter', () => {
  it('format of weather', () => {
    expect(openWeatherResponseToWeather(rawDataMock)).toStrictEqual(
      dataWeather,
    );
  });
});

it('format of empty data', () => {
  expect(openWeatherResponseToWeather(rawDataEmpty)).toStrictEqual(dataEmpty);
});
