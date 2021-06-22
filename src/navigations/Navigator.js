import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login'
import Register from '../screens/Register'
import CameraPage from '../screens/CameraPage'
import SignInScreen from '../screens/Signin'
import SignUpScreen from '../screens/Signup'
const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Login : {screen:SignInScreen} , 
    Register : {screen:SignUpScreen},
    Camera : {screen: CameraPage},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);