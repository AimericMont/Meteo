import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {ForecastData} from './weatherData.type';
import {convertKelvinToCelcius} from './unitConverter';
import {convertMeterSecondToKilometerHour} from './unitConverter';

interface Props {
  forecastElement: ForecastData;
}

export class TemplateWeather extends React.Component<Props> {
  render() {
    const forecast: ForecastData = this.props.forecastElement;

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
                Rain : {forecast.rainProbability * 100}%
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
