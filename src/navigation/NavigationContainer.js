import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SplashScreen} from '../screens/SplashScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {WelcomeScreen} from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export const NavigationContainer = () => {
  return (
    <Stack.Navigator initialRouteName={'Splash'} headerMode={'none'}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
