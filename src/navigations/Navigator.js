import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login'
import Register from '../screens/Register'
import Camera from '../screens/Camera'


const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Login : {screen:Login} , 
    Register : {screen:Register},
    Camera : {screen: Camera},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);