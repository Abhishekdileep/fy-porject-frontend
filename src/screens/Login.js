import React from 'react';
import { Text , View , Image, ImageEditor, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
// import navigate from '../navigations/Navigator'

export default class Login extends React.Component{
    render(){
        const {navigate} = this.props.navigation
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

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection : "row",
                    alignItems : "center",
                    marginHorizontal:55,
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
                        style={{paddingHorizontal :10}} />
                    
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
                    <Text onPress={
                        ()=>{
                            const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'multipart/form-data' ,
                                            'Accept' : "application/json" },
                                    body: JSON.stringify({ username: 'abhishekdileep99@gmail.com' , password : 'as192sbv' })
                                };
                             
                            try{
                                fetch('http://192.168.43.237:3000/login', requestOptions ).then( res => res.json() )
                                .then(
                                    (result)=>{
                                          console.log(result);
                                    },
                                    (error)=>{
                                        console.log("error"+error);
                                    }
                                    )
                                }
                            catch(err){
                                      console.log('Network error');
                                    }
                            }   
                    } 
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