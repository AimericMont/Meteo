export interface WeatherDataUsed {
  forecasts: ForecastData[];
  city: string;
}
export interface ForecastData {
  id: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  rainProbability: number;
  timeForecast: string;
  weatherMain?: string;
  windSpeed: number;
}
