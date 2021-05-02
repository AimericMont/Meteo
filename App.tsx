/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,
   View,
   Button,
   FlatList,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import meteoData from './Helpers/meteoData'
 import MeteoItem from './Components/meteoItem'

 import { getWeatherFromApi } from './API/MDBApi'



 export default class App extends React.Component {


  _loadWeather() {
    getWeatherFromApi().then(data => console.log(data))
  }

 //essaie avec une FlatList, pour comprendre les echanges de données entre component
   render() {
     return (
      <View style={{ marginTop:20}}>
        <Button title="Rechercher" onPress={()=> getWeatherFromApi()}/>
        
       
        <FlatList
          data={[
            {
                id: 1203,
                city: "Orgerus",
                tempMax: 20.1,
                tempMin: 12.3,
                main: "clouds",
                description : "overcast clouds"
            },
            {
                id: 1206,
                city: "Osmoy",
                tempMax: 22.1,
                tempMin: 14.3,
                main: "sun",
                description : "hot sun"
            },
            {
                id: 1207,
                city: "Behoust",
                tempMax: 24.1,
                tempMin: 17.3,
                main: "sun",
                description : "hot sun"
            }
        ]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MeteoItem meteo={item}/>}
          />

      </View>
           
     );
   }
 }



 