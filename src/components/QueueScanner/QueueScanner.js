import React,{ Component } from "react";
import {View,TouchableOpacity,Text} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles";

class QueueScanner extends Component{
  render(){
    return <View style={styles.queueScannerContainer}>
      <TouchableOpacity onPress={this.props.toggleScanning}>
        {
          this.props.isScanning ?
          <View  style={{padding:8,borderRadius:20,backgroundColor:"white"}}>
            <Ionicons name="stop" size={16} color="black" /> 
          </View>:
          <View style={{padding:8,borderRadius:20,backgroundColor:"white"}}>
            <Ionicons name="play" size={16} color="black" />
          </View>
        }
      </TouchableOpacity>
      {
        this.props.scanningStatus!=="" && 
        <View style={{padding:8,borderRadius:20,backgroundColor:"white"}}>
          <Text>{this.props.scanningStatus}</Text>
        </View>
      }
      
    </View>
  }
}


export default QueueScanner