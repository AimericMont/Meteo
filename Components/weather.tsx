import React from 'react';

import {View, ScrollView, StyleSheet} from 'react-native';

import {getWeatherFromApi} from '../API/MDBApi';
import TemplateWeather from './templateWeather';
import {CityWeather} from './weather.type';

interface State {
  weather: CityWeather;
}

interface Props {}

export class Weather extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      weather: {cod: '', message: 0, cnt: 0, list: null, city: null},
    };
  }

  componentDidMount = () => {
    this._loadWeather();
  };

  _loadWeather = () => {
    getWeatherFromApi().then(data => {
      return this.setState({weather: data});
    });
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <ScrollView>
          {this.state.weather &&
            this.state.weather.list?.map(forecast => {
              return (
                <TemplateWeather forecastElement={forecast} key={forecast.dt} />
              );
            })}
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
