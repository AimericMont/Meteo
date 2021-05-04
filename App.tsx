import 'react-native-gesture-handler';
import React from 'react';

import ListScreen from './Screen/ListScreen';
import FavoritesScreen from './Screen/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Weather') {
                iconName = focused ? 'star' : 'star-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-half';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'black',
          }}>
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
