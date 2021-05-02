import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Forecast} from './weather.type';

interface Props {
  forecastElement: Forecast;
}

export class TemplateWeather extends React.Component<Props> {
  render() {
    const forecast: Forecast = this.props.forecastElement;
    const KtoC: number = 273;
    const msTokmh: number = 3.6;

    return (
      <View>
        <View>
          <Text style={styles.textTitle}>{forecast.dt_txt}</Text>
        </View>
        <View style={styles.caracterictics}>
          <View style={styles.titleCara}>
            <View>
              <Text style={styles.text}>
                T°Max :{' '}
                {Math.trunc((forecast.main.temp_max - KtoC) * 100) / 100}
              </Text>
            </View>
            <View>
              <Text style={styles.text}>
                T°Min :{' '}
                {Math.trunc((forecast.main.temp_min - KtoC) * 100) / 100}
              </Text>
            </View>
          </View>
          <View style={styles.titleCara}>
            <View>
              <Text style={styles.text}>
                Speed Wind :{' '}
                {Math.trunc(forecast.wind.speed * msTokmh * 100) / 100} km/h
              </Text>
            </View>
            <View>
              <Text style={styles.text}>Rain : {forecast.pop * 100}%</Text>
            </View>
          </View>
          <View style={styles.titleCara}>
            <View>
              <Text style={styles.text}>
                {forecast.weather && forecast.weather[0].main}
              </Text>
            </View>
            <View>
              <Text style={styles.text}>
                Humidity : {forecast.main.humidity}%
              </Text>
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
  titleCara: {
    flex: 0.33,
  },
  caracterictics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  textTitle: {
    color: 'red',
    fontSize: 25,
  },
});

export default TemplateWeather;
