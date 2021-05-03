import 'react-native-gesture-handler';
import React from 'react';

import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Weather from './src/Components/weather';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.screenContainer}>
          <Weather />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
});
