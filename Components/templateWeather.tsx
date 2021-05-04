import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {ForecastData} from './weatherData.type';

const KELVIN_OFFSET: number = 273;
const METER_PER_SECOND_RATIO: number = 3.6;

interface Props {
  forecastElement: ForecastData;
}

export class TemplateWeather extends React.Component<Props> {
  render() {
    const forecast: ForecastData = this.props.forecastElement;

    const convertKelvinToCelcius = (temperature: number) =>
      Math.trunc((temperature - KELVIN_OFFSET) * 100) / 100;

    const convertMeterSecondToKilometerHour = (speed: number) =>
      Math.trunc(speed * METER_PER_SECOND_RATIO * 100) / 100;

    return (
      <View>
        <View>
          <Text style={styles.textTitle}>{forecast.timeForecast}</Text>
        </View>
        <View style={styles.caracterictics}>
          <View style={styles.caracteristicsColumn}>
            <View>
              <Text style={styles.text}>
                T°Max :{convertKelvinToCelcius(forecast.tempMax)}
              </Text>
            </View>
            <View>
              <Text style={styles.text}>
                T°Min :{convertKelvinToCelcius(forecast.tempMin)}
              </Text>
            </View>
          </View>
          <View style={styles.caracteristicsColumn}>
            <View>
              <Text style={styles.text}>
                Speed Wind :
                {convertMeterSecondToKilometerHour(forecast.windSpeed)}
                km/h
              </Text>
            </View>
            <View>
              <Text style={styles.text}>
                Rain : {forecast.rainPourcent * 100}%
              </Text>
            </View>
          </View>
          <View style={styles.caracteristicsColumn}>
            <View>
              <Text style={styles.text}>{forecast.weatherMain}</Text>
            </View>
            <View>
              <Text style={styles.text}>Humidity : {forecast.humidity}%</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewParent: {
    flexDirection: 'row',
  },
  caracteristicsColumn: {
    flex: 0.33,
  },
  caracterictics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 15,
  },
  textTitle: {
    color: 'red',
    fontSize: 25,
  },
});

export default TemplateWeather;
