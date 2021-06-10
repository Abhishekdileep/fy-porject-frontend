import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default function Register(){

    const [email , setEmail ] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [confirmpass , setConfirmpass ] = React.useState('');

        function registerFunc(){
            const requestOptions = {
                method: 'POST',
                headers: {  
                            'Accept-type' : 'application/json  , text/plain , */* ' ,
                            'Content-Type': 'application/json' ,
                        },
                body: JSON.stringify({ "username": username , "password" : password } ) 
            };
        try{
            fetch('http://192.168.43.237:3000/Register/', requestOptions )
            .then( res => res.text())
            .then( (result)=>{
                        console.log(result)
                        try{
                        navigation.navigate('Login');
                        }catch(err){
                            console.log(err);
                        }
                        console.log('completed');
                },
                (error)=>{
                    console.log(error);
                }
                )
            }
        catch(err){
                  console.log('Network error');
                }
        }
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Register</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        onChangeText={text => setEmail(text) }
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        onChangeText = {text => setPassword(text) }
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        onChangeText={text => setConfirmpass(text) }
                    />
                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}
                    onPress={registerFunc}
                    >Register</Text>
                </View>
              
            </View>
        )
    
}