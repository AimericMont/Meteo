import {ForecastData} from '../../Components/weatherData.type';
import {ActionType} from '../actions';

const initialState: WeatherState = {favoriteForecast: []};

export interface WeatherState {
  favoriteForecast: ForecastData[];
}

export function favoriteReducer(
  state: WeatherState = initialState,
  action: ActionType,
): WeatherState {
  let newState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      if (state.favoriteForecast.includes(action.value)) {
        //delete it
        newState = {
          ...state,
          favoriteForecast: state.favoriteForecast.filter(
            item => item.id !== action.value.id,
          ),
        };
      } else {
        //add it
        newState = {
          ...state,
          favoriteForecast: [...state.favoriteForecast, action.value],
        };
      }
      return newState || state;
    default:
      return state;
  }
}

export default favoriteReducer;
