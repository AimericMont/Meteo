import 'react-native-gesture-handler';
import React from 'react';

import FavoritesScreen from './src/Screen/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Weather from './src/Components/weather';
import {Provider} from 'react-redux';
import Store from './src/Store/configureStore';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                var iconName: string = '';
                if (route.name === 'Weather') {
                  iconName = 'star';
                } else if (route.name === 'Favorites') {
                  iconName = 'heart';
                }
                return (
                  <FontAwesome5 name={iconName} size={size} color={color} />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: 'red',
              inactiveTintColor: 'black',
            }}>
            <Tab.Screen
              name="Weather"
              component={Weather}
              options={{title: 'Forecast'}}
            />
            <Tab.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{title: 'Favorites'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
