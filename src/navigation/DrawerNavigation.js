import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {ContactStackNavigator} from './StackNavigator';
import NavigationTab from './NavigationTab';

const Drawer = createDrawerNavigator();
const icon = <Icon name={'home'} solid />;
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={NavigationTab}
        options={{
          title: 'Home',
          drawerIcon: () => icon,
        }}
      />
      {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
