import {CityWeather} from '../Components/weatherRawApi.type';

export const rawDataMock: CityWeather = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1620064800,
      main: {
        temp: 288.08,
        feels_like: 286.91,
        temp_min: 285.33,
        temp_max: 288.08,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 999,
        humidity: 49,
        temp_kf: 2.75,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 6.2,
        deg: 223,
        gust: 11.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-03 18:00:00',
    },
    {
      dt: 1620075600,
      main: {
        temp: 284.86,
        feels_like: 283.39,
        temp_min: 282.56,
        temp_max: 284.86,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 997,
        humidity: 50,
        temp_kf: 2.3,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 8.69,
        deg: 225,
        gust: 16.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-03 21:00:00',
    },
    {
      dt: 1620086400,
      main: {
        temp: 280.84,
        feels_like: 276.24,
        temp_min: 280.84,
        temp_max: 280.84,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 994,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 10.28,
        deg: 219,
        gust: 19.85,
      },
      visibility: 10000,
      pop: 0.28,
      rain: {
        '3h': 0.19,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-04 00:00:00',
    },
  ],
  city: {
    id: 2989376,
    name: 'Orgerus',
    coord: {
      lat: 48.8385,
      lon: 1.7013,
    },
    country: 'FR',
    population: 2364,
    timezone: 7200,
    sunrise: 1620016154,
    sunset: 1620069045,
  },
};
