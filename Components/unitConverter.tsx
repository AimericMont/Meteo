const KELVIN_OFFSET: number = 273;
const METER_PER_SECOND_RATIO: number = 3.6;

export const convertKelvinToCelcius = (temperature: number) =>
  Math.trunc((temperature - KELVIN_OFFSET) * 100) / 100;

export const convertMeterSecondToKilometerHour = (speed: number) =>
  Math.trunc(speed * METER_PER_SECOND_RATIO * 100) / 100;
