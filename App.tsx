import 'react-native-gesture-handler';
import React from 'react';

import ListScreen from './Screen/ListScreen';
import FavoritesScreen from './Screen/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Weather"
            component={ListScreen}
            options={{title: 'Forecast'}}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{title: 'Favorites'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
