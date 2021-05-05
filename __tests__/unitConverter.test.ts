import {convertKelvinToCelcius} from '../Components/unitConverter';
import {convertMeterSecondToKilometerHour} from '../Components/unitConverter';

it('negative temperature', () => {
  expect(convertKelvinToCelcius(-10)).toStrictEqual(-283);
});

it('temperature zero', () => {
  expect(convertKelvinToCelcius(0)).toStrictEqual(-273);
});

it('positive temperature', () => {
  expect(convertKelvinToCelcius(290)).toStrictEqual(17);
});

it('speed', () => {
  expect(convertMeterSecondToKilometerHour(10)).toStrictEqual(36);
});

it('no speed', () => {
  expect(convertMeterSecondToKilometerHour(0)).toStrictEqual(0);
});
