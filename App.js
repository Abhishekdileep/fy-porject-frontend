import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

export default class App extends React.Component {

  state = {
    isFontLoaded : false
  } ; 

  async componentDidMount() {
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'multipart/form-data' ,
//                 'Accept' : "application/json" 
//              },
//     body: JSON.stringify({ username: 'abhishekdileep99@gmail.com' , password : 'as192sbv' })
// };
//   function temp(){
//         try{
//       fetch('http://192.168.43.237:3000/login', requestOptions )
//         }
//         catch(err){
//           console.log('Network error');
//         }
//     }
render(){
  return (
    (this.state.isFontLoaded === true) ? (<AppNavigator/>):(<Text> Loading </Text>)
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
