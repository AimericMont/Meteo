import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Weather from '../Components/weather';
//import Weather from './Components/weather';

class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <Text>List Screen</Text>
        <Weather />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListScreen;
