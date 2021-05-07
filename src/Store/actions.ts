import {ForecastData} from '../Components/weatherData.type';

export const action = (forecastElement: ForecastData): ActionType => {
  return {type: 'TOGGLE_FAVORITE', value: forecastElement};
};

export interface ActionType {
  type: 'TOGGLE_FAVORITE';
  value: ForecastData;
}
