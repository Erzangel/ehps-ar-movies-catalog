import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import LoginScreen from './src/pages/Login';
import NavigationBar from './src/components/BottomTabNavigator';
import Profile from './src/pages/Profile';
import Register from './src/pages/Register';
import Unity from './src/pages/Unity';


const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Unity" component={Unity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 

/*
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
*/
