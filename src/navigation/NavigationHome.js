import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/container/Home';
import Details from '../sections/components/details';

const Stack = createStackNavigator();

export default function NavigationHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeNavigation"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
