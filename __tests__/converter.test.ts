import {openWeatherResponseToWeather} from '../src/API/openWeatherResponseToWeather';

import {WeatherDataUsed} from '../src/Components/weatherData.type';
import {CityWeather} from '../src/Components/weatherRawApi.type';

import {rawDataMock} from '../src/dataTest/rawDataForTest';
import {dataWeather} from '../src/dataTest/dataForTest';
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
