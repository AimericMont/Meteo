import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {ForecastData} from './weatherData.type';
import {convertKelvinToCelcius} from './unitConverter';
import {convertMeterSecondToKilometerHour} from './unitConverter';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {action} from '../Store/actions';
import {WeatherState} from '../Store/Reducers/favoriteReducer';

interface Props {
  forecastElement: ForecastData;
  favoriteForecast: ForecastData[];
}

export class TemplateWeather extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  spinValue = new Animated.Value(0);

  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  isItFavorite = () => {
    if (this.props.favoriteForecast.includes(this.props.forecastElement)) {
      return 'red';
    } else {
      return 'green';
    }
  };

  toggleFavorite = () => {
    this.props.dispatch(action(this.props.forecastElement));
  };

  rotate = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  render() {
    const forecast: ForecastData = this.props.forecastElement;

    return (
      <View>
        <View style={styles.viewParent}>
          <Text style={styles.textTitle}>{forecast.timeForecast}</Text>
          <TouchableOpacity
            onPress={() => {
              this.spin();
              this.toggleFavorite();
            }}
            hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
            <Animated.View style={{transform: [{rotate: this.rotate}]}}>
              <FontAwesome5
                name={'star'}
                size={25}
                color={this.isItFavorite()}
              />
            </Animated.View>
          </TouchableOpacity>
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
    alignItems: 'center',
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
    paddingRight: 16,
  },
});

const mapStateToProps = (state: WeatherState) => {
  return {
    favoriteForecast: state.favoriteForecast,
  };
};

export default connect(mapStateToProps)(TemplateWeather);
