import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {ContactStackNavigator} from './StackNavigator';
import NavigationTab from './NavigationTab';
import Profile from '../screens/container/Profile';
import Settings from '../screens/container/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={NavigationTab}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => (
            <Icon
              name="home"
              style={[focused ? styles.drawerActive : styles.drawerInActive]}
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          drawerIcon: () => <Icon name="user" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Configuracion',
          drawerIcon: () => <Icon name="wrench" size={20} color="black" />,
        }}
      />

      <Drawer.Screen name="Logout" component={Profile} />
    </Drawer.Navigator>
  );
};

const styles = {
  drawerActive: {
    color: '#e91e63',
  },
  drawerInActive: {
    color: '#aeaeae',
  },
};

export default DrawerNavigator;
