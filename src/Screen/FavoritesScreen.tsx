import React from 'react';

import {View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import TemplateWeather from '../Components/templateWeather';
import {ForecastData, WeatherDataUsed} from '../Components/weatherData.type';
import {WeatherState} from '../Store/Reducers/favoriteReducer';

interface State {
  weather: WeatherDataUsed;
}

interface Props {
  favoriteForecast: ForecastData[];
}

export class FavoritesScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screenContainer}>
        <ScrollView>
          {this.props.favoriteForecast?.map((forecast: ForecastData) => (
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

const mapStateToProps = (state: WeatherState) => {
  return {
    favoriteForecast: state.favoriteForecast,
  };
};

export default connect(mapStateToProps)(FavoritesScreen);
