import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {ContactStackNavigator} from './StackNavigator';
import NavigationTab from './NavigationTab';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={NavigationTab}
        options={{
          title: 'Home',
          drawerIcon: () => <Icon name="home" size={20} color="black" />,
        }}
      />
      {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
