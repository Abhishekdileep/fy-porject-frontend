import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font'

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

render(){
  return (
    (this.state.isFontLoaded === true) ? (<AppNavigator/>) :(<Text> Loading </Text>)
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
