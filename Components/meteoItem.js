 import React from 'react';
 
 import {Text} from 'react-native';

class meteoItem extends React.Component {
    render() {
      const meteo=this.props.meteo
      return (
        <Text style={{color: 'white'}}>{meteo.city}</Text>        
      );
    }
  }

export default meteoItem