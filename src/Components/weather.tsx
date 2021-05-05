import React from 'react';

import {View, ScrollView, StyleSheet} from 'react-native';
import {getWeatherData} from '../API/getWeatherData';
import TemplateWeather from './templateWeather';
import {WeatherDataUsed} from './weatherData.type';

interface State {
  weather: WeatherDataUsed;
}

interface Props {}

export class Weather extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      weather: {forecasts: [], city: ''},
    };
  }

  componentDidMount = () => {
    this.loadWeather();
  };

  loadWeather = () => {
    getWeatherData().then(data => this.setState({weather: data}));
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <ScrollView>
          {this.state.weather.forecasts?.map(forecast => (
            <TemplateWeather forecastElement={forecast} key={forecast.id} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 20,
  },
});

export default Weather;
