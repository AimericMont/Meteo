import {getWeatherData} from '../API/getWeatherData';

describe('get weather', () => {
  it('Api test', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise(resolve => {
        resolve({
          json: function () {
            return {city: 'Orgerus'};
          },
        });
      });
      return p;
    });

    const response = await getWeatherData();
    expect(response.city).toBe('Orgerus');
  });
});
