import React from 'react';

import {Text, View, ScrollView} from 'react-native';

import {getWeatherFromApi} from '../API/MDBApi';
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
      <View>
        <ScrollView>
          {this.state.weather &&
            this.state.weather.list?.map(forecast => {
              return <Text key={forecast.dt}>{forecast.dt_txt}</Text>;
            })}
        </ScrollView>
      </View>
    );
  }
}

export default Weather;
