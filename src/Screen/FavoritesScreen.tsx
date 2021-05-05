import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

class FavoritesScreen extends React.Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <Text>Favorites Screen</Text>
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

export default FavoritesScreen;
