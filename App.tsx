import 'react-native-gesture-handler';
import React from 'react';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import ListScreen from './Screen/ListScreen';
import FavorisScreen from './Screen/FavorisScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Favoris" component={FavorisScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
