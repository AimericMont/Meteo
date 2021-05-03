import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

class FavorisScreen extends React.Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <Text>Favoris Screen</Text>
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

export default FavorisScreen;
