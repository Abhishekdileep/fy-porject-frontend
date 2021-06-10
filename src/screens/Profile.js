import React from 'react'
import { Text , View , Image, ImageEditor, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function profile(){

    return (<View style={{backgroundColor :"#FFF" ,height : "100%"}}>
    <Image 
        source={require('../images/image.jpg')}
        style={{width : "100%" , height : "43%"}}
    />
    <Text style = {{
        fontSize : 28 ,
        fontFamily : "SemiBold",
        alignSelf : "center"
    }}>Profile  </Text>

    <View style={{
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        backgroundColor:"#00716F",
        paddingVertical:10,
        borderRadius:23
    }}>
        <Text onPress={enter} 
        style={{
            color:"white",
            fontFamily:"SemiBold"
        }}>Camera</Text>
    </View>
 
        
</View>)
}