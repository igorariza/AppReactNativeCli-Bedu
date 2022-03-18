import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/container/Home';

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
    </Stack.Navigator>
  );
}
