import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main} from '../views/main';
import HelloScreen from '../Presentation/screens/HelloScreen'
import TipsScreen from '../Presentation/screens/TipsScreen'
import LoginScreen from '../Presentation/screens/LoginScreen'
// Common options
const defaultScreenOptions = {
  headerShown: false,
};

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={defaultScreenOptions}
      initialRouteName="HelloScreen">
  <Stack.Screen name="HelloScreen" component={HelloScreen} />
  <Stack.Screen name="TipsScreen" component={TipsScreen} />
  <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainView" component={Main} />
    </Stack.Navigator>
  );
}
