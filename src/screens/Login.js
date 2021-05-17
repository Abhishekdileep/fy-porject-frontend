import React from 'react';
import { Text , View , Image, ImageEditor, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Login extends React.Component{
    render(){
    const {navigate} = this.props.navigation

        function enter(){
            const requestOptions = {
                    method: 'POST',
                    headers: {  
                                'Accept-type' : 'application/json  , text/plain , */* ' ,
                                'Content-Type': 'application/json' ,
                            },
                    body: JSON.stringify({ "username": 'joemama@gmail.com' , "password" : 'password' } ) 
                };
            try{
                fetch('http://172.17.1.162:3000/login/', requestOptions )
                .then( res => res.text() )
                .then(
                    (result)=>{
                            console.log(result)
                            try{
                            navigate('Camera');
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

        return (
            <View style={{backgroundColor :"#FFF" ,height : "100%"}}>
                <Image 
                    source={require('../images/image.jpg')}
                    style={{width : "100%" , height : "43%"}}
                />
                <Text style = {{
                    fontSize : 28 ,
                    fontFamily : "SemiBold",
                    alignSelf : "center"
                }}>Login</Text>

                <View style={{
                    flexDirection : "row",
                    alignItems : "center",
                    marginHorizontal:45,
                    borderWidth:2,
                    marginTop:20,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name='mail' color='#00716F' size={24} />
                    <TextInput 
                        style={{paddingHorizontal :10}} />
                    
                </View>
                
                <View style={{
                    flexDirection : "row",
                    alignItems : "center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name='lock' color='#00716F' size={24} />
                    <TextInput 
                        style={{paddingHorizontal :10}} secureTextEntry={true}/>
                    
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
                    <Text onPress={enter} 
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Login</Text>
                </View>

                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>New User</Text>    
                    
            </View>
        )
    }
}