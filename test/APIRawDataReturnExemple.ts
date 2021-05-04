import {CityWeather} from '../Components/weatherRawApi.type';

export const rawData: CityWeather = {
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
    {
      dt: 1620097200,
      main: {
        temp: 281.81,
        feels_like: 277.28,
        temp_min: 281.81,
        temp_max: 281.81,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 992,
        humidity: 71,
        temp_kf: 0,
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
        all: 100,
      },
      wind: {
        speed: 11.43,
        deg: 224,
        gust: 20.8,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-04 03:00:00',
    },
    {
      dt: 1620108000,
      main: {
        temp: 283.28,
        feels_like: 282.52,
        temp_min: 283.28,
        temp_max: 283.28,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 991,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 10.19,
        deg: 237,
        gust: 19.19,
      },
      visibility: 10000,
      pop: 0.26,
      rain: {
        '3h': 0.15,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-04 06:00:00',
    },
    {
      dt: 1620118800,
      main: {
        temp: 284.42,
        feels_like: 283.53,
        temp_min: 284.42,
        temp_max: 284.42,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 992,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.11,
        deg: 254,
        gust: 15.22,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        '3h': 0.28,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-04 09:00:00',
    },
    {
      dt: 1620129600,
      main: {
        temp: 286.34,
        feels_like: 285.36,
        temp_min: 286.34,
        temp_max: 286.34,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.39,
        deg: 262,
        gust: 13.42,
      },
      visibility: 10000,
      pop: 0.52,
      rain: {
        '3h': 0.38,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-04 12:00:00',
    },
    {
      dt: 1620140400,
      main: {
        temp: 286.81,
        feels_like: 285.72,
        temp_min: 286.81,
        temp_max: 286.81,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 992,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 7.37,
        deg: 270,
        gust: 10.65,
      },
      visibility: 10000,
      pop: 0.33,
      rain: {
        '3h': 0.15,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-04 15:00:00',
    },
    {
      dt: 1620151200,
      main: {
        temp: 283.83,
        feels_like: 282.78,
        temp_min: 283.83,
        temp_max: 283.83,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 4.82,
        deg: 295,
        gust: 8.34,
      },
      visibility: 10000,
      pop: 0.44,
      rain: {
        '3h': 0.3,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-04 18:00:00',
    },
    {
      dt: 1620162000,
      main: {
        temp: 278.46,
        feels_like: 276.28,
        temp_min: 278.46,
        temp_max: 278.46,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 994,
        humidity: 88,
        temp_kf: 0,
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
        all: 95,
      },
      wind: {
        speed: 2.67,
        deg: 276,
        gust: 3.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-04 21:00:00',
    },
    {
      dt: 1620172800,
      main: {
        temp: 276.06,
        feels_like: 272.81,
        temp_min: 276.06,
        temp_max: 276.06,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 3.44,
        deg: 261,
        gust: 11.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-05 00:00:00',
    },
    {
      dt: 1620183600,
      main: {
        temp: 275.08,
        feels_like: 271.21,
        temp_min: 275.08,
        temp_max: 275.08,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 4.04,
        deg: 247,
        gust: 11.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-05 03:00:00',
    },
    {
      dt: 1620194400,
      main: {
        temp: 277.42,
        feels_like: 273.38,
        temp_min: 277.42,
        temp_max: 277.42,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 995,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 5.41,
        deg: 257,
        gust: 12.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-05 06:00:00',
    },
    {
      dt: 1620205200,
      main: {
        temp: 282.11,
        feels_like: 278.59,
        temp_min: 282.11,
        temp_max: 282.11,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 996,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 16,
      },
      wind: {
        speed: 7.55,
        deg: 283,
        gust: 9.65,
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        '3h': 0.24,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-05 09:00:00',
    },
    {
      dt: 1620216000,
      main: {
        temp: 284.7,
        feels_like: 283.16,
        temp_min: 284.7,
        temp_max: 284.7,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 45,
      },
      wind: {
        speed: 7.09,
        deg: 276,
        gust: 9.04,
      },
      visibility: 10000,
      pop: 0.46,
      rain: {
        '3h': 0.33,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-05 12:00:00',
    },
    {
      dt: 1620226800,
      main: {
        temp: 283.29,
        feels_like: 282.03,
        temp_min: 283.29,
        temp_max: 283.29,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 997,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.93,
        deg: 279,
        gust: 8.86,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        '3h': 1.04,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-05 15:00:00',
    },
    {
      dt: 1620237600,
      main: {
        temp: 281.7,
        feels_like: 278.97,
        temp_min: 281.7,
        temp_max: 281.7,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 998,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 4.89,
        deg: 298,
        gust: 9.03,
      },
      visibility: 10000,
      pop: 0.78,
      rain: {
        '3h': 0.4,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-05 18:00:00',
    },
    {
      dt: 1620248400,
      main: {
        temp: 278.1,
        feels_like: 275.75,
        temp_min: 278.1,
        temp_max: 278.1,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 998,
        humidity: 80,
        temp_kf: 0,
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
        all: 100,
      },
      wind: {
        speed: 2.8,
        deg: 238,
        gust: 5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-05 21:00:00',
    },
    {
      dt: 1620259200,
      main: {
        temp: 277.36,
        feels_like: 274.79,
        temp_min: 277.36,
        temp_max: 277.36,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 998,
        humidity: 79,
        temp_kf: 0,
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
        all: 100,
      },
      wind: {
        speed: 2.89,
        deg: 239,
        gust: 6.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-06 00:00:00',
    },
    {
      dt: 1620270000,
      main: {
        temp: 277.25,
        feels_like: 274.65,
        temp_min: 277.25,
        temp_max: 277.25,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 997,
        humidity: 77,
        temp_kf: 0,
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
        all: 100,
      },
      wind: {
        speed: 2.9,
        deg: 232,
        gust: 6.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-06 03:00:00',
    },
    {
      dt: 1620280800,
      main: {
        temp: 278.77,
        feels_like: 276.38,
        temp_min: 278.77,
        temp_max: 278.77,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 996,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.03,
        deg: 209,
        gust: 6.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-06 06:00:00',
    },
    {
      dt: 1620291600,
      main: {
        temp: 282.35,
        feels_like: 279.06,
        temp_min: 282.35,
        temp_max: 282.35,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 995,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 6.99,
        deg: 205,
        gust: 8.11,
      },
      visibility: 10000,
      pop: 0.31,
      rain: {
        '3h': 0.13,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-06 09:00:00',
    },
    {
      dt: 1620302400,
      main: {
        temp: 279.57,
        feels_like: 275.48,
        temp_min: 279.57,
        temp_max: 279.57,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 991,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 7.03,
        deg: 169,
        gust: 14.98,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 2.44,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-06 12:00:00',
    },
    {
      dt: 1620313200,
      main: {
        temp: 285.09,
        feels_like: 284.59,
        temp_min: 285.09,
        temp_max: 285.09,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 989,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.94,
        deg: 237,
        gust: 11.73,
      },
      visibility: 10000,
      pop: 0.66,
      rain: {
        '3h': 0.24,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-06 15:00:00',
    },
    {
      dt: 1620324000,
      main: {
        temp: 284.51,
        feels_like: 283.87,
        temp_min: 284.51,
        temp_max: 284.51,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 990,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.05,
        deg: 253,
        gust: 12.81,
      },
      visibility: 10000,
      pop: 0.92,
      rain: {
        '3h': 1.06,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-06 18:00:00',
    },
    {
      dt: 1620334800,
      main: {
        temp: 280.82,
        feels_like: 277.55,
        temp_min: 280.82,
        temp_max: 280.82,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 993,
        humidity: 94,
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
        all: 93,
      },
      wind: {
        speed: 5.69,
        deg: 298,
        gust: 10.32,
      },
      visibility: 10000,
      pop: 0.75,
      rain: {
        '3h': 0.51,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-06 21:00:00',
    },
    {
      dt: 1620345600,
      main: {
        temp: 278.19,
        feels_like: 276.14,
        temp_min: 278.19,
        temp_max: 278.19,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 996,
        humidity: 96,
        temp_kf: 0,
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
        all: 97,
      },
      wind: {
        speed: 2.45,
        deg: 323,
        gust: 5.93,
      },
      visibility: 10000,
      pop: 0.39,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-07 00:00:00',
    },
    {
      dt: 1620356400,
      main: {
        temp: 276.44,
        feels_like: 274.86,
        temp_min: 276.44,
        temp_max: 276.44,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 998,
        humidity: 95,
        temp_kf: 0,
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
        all: 96,
      },
      wind: {
        speed: 1.72,
        deg: 0,
        gust: 1.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-07 03:00:00',
    },
    {
      dt: 1620367200,
      main: {
        temp: 278.32,
        feels_like: 278.32,
        temp_min: 278.32,
        temp_max: 278.32,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1000,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 0.59,
        deg: 85,
        gust: 0.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-07 06:00:00',
    },
    {
      dt: 1620378000,
      main: {
        temp: 282.75,
        feels_like: 282.2,
        temp_min: 282.75,
        temp_max: 282.75,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1002,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.64,
        deg: 139,
        gust: 1.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-07 09:00:00',
    },
    {
      dt: 1620388800,
      main: {
        temp: 285.64,
        feels_like: 284.41,
        temp_min: 285.64,
        temp_max: 285.64,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1001,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.12,
        deg: 163,
        gust: 2.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-07 12:00:00',
    },
    {
      dt: 1620399600,
      main: {
        temp: 285.65,
        feels_like: 284.68,
        temp_min: 285.65,
        temp_max: 285.65,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1000,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.88,
        deg: 186,
        gust: 3.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-07 15:00:00',
    },
    {
      dt: 1620410400,
      main: {
        temp: 284.31,
        feels_like: 283.6,
        temp_min: 284.31,
        temp_max: 284.31,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1000,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.07,
        deg: 170,
        gust: 5.63,
      },
      visibility: 10000,
      pop: 0.31,
      rain: {
        '3h': 0.14,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-07 18:00:00',
    },
    {
      dt: 1620421200,
      main: {
        temp: 282.38,
        feels_like: 280.6,
        temp_min: 282.38,
        temp_max: 282.38,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 999,
        humidity: 97,
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
        speed: 3.23,
        deg: 166,
        gust: 7.5,
      },
      visibility: 10000,
      pop: 0.75,
      rain: {
        '3h': 0.81,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-07 21:00:00',
    },
    {
      dt: 1620432000,
      main: {
        temp: 283.57,
        feels_like: 283.2,
        temp_min: 283.57,
        temp_max: 283.57,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 997,
        humidity: 97,
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
        speed: 4.97,
        deg: 189,
        gust: 11.05,
      },
      visibility: 10000,
      pop: 0.78,
      rain: {
        '3h': 1.23,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-08 00:00:00',
    },
    {
      dt: 1620442800,
      main: {
        temp: 284.42,
        feels_like: 284.11,
        temp_min: 284.42,
        temp_max: 284.42,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 996,
        humidity: 96,
        temp_kf: 0,
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
        all: 100,
      },
      wind: {
        speed: 6.21,
        deg: 193,
        gust: 14.33,
      },
      visibility: 10000,
      pop: 0.3,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-08 03:00:00',
    },
    {
      dt: 1620453600,
      main: {
        temp: 284.37,
        feels_like: 284,
        temp_min: 284.37,
        temp_max: 284.37,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 995,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.35,
        deg: 194,
        gust: 15,
      },
      visibility: 10000,
      pop: 0.26,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-08 06:00:00',
    },
    {
      dt: 1620464400,
      main: {
        temp: 289.8,
        feels_like: 289.37,
        temp_min: 289.8,
        temp_max: 289.8,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 993,
        humidity: 71,
        temp_kf: 0,
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
        all: 78,
      },
      wind: {
        speed: 7.79,
        deg: 190,
        gust: 13.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-08 09:00:00',
    },
    {
      dt: 1620475200,
      main: {
        temp: 294.59,
        feels_like: 294.43,
        temp_min: 294.59,
        temp_max: 294.59,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 991,
        humidity: 63,
        temp_kf: 0,
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
        all: 56,
      },
      wind: {
        speed: 9.46,
        deg: 208,
        gust: 15.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-08 12:00:00',
    },
    {
      dt: 1620486000,
      main: {
        temp: 294.98,
        feels_like: 294.86,
        temp_min: 294.98,
        temp_max: 294.98,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 989,
        humidity: 63,
        temp_kf: 0,
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
        all: 79,
      },
      wind: {
        speed: 8.59,
        deg: 223,
        gust: 19.01,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-08 15:00:00',
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
