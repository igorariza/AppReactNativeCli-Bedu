import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/container/Home';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
