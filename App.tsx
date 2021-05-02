import React from 'react';

import {View, StyleSheet} from 'react-native';

import Weather from './Components/weather';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <Weather />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 20,
  },
});
