import React from 'react';

import {View} from 'react-native';
import Weather from '../Components/weather';

class ListScreen extends React.Component {
  render() {
    return (
      <View>
        <Weather />
      </View>
    );
  }
}

export default ListScreen;
