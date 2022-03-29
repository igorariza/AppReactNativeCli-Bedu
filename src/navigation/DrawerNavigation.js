import React from 'react';
import Store from '../store/store';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NavigationTab from './NavigationTab';
import Profile from '../screens/container/Profile';
import Settings from '../screens/container/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  function CustomDrawerContent(props) {
    const navigation = useNavigation();
    const handleClose = () => {
      Store.remove({
        key: 'userLogin',
      });
      navigation.navigate('Login');
    };
    const handleHome = () => {
      navigation.navigate('Home');
    };
    const handleOrders = () => {
      navigation.navigate('Orders');
    };
    const handleMore = () => {
      navigation.navigate('More');
    };
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Cerrar Sesión"
          onPress={handleClose}
          icon={renderImageCerrarSesion}
        />
        <DrawerItem label="Home" onPress={handleHome} icon={renderImageHome} />
        <DrawerItem
          label="Orders"
          onPress={handleOrders}
          icon={renderImageOrders}
        />
        <DrawerItem label="More" onPress={handleMore} icon={renderImageMore} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={NavigationTab}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../../assets/ic_home/ic_home.png')}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                {height: size, width: size},
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

function renderImageCerrarSesion(image) {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_settings/ic_settings.png')}
    />
  );
}
function renderImageHome(image) {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_home/ic_home.png')}
    />
  );
}
function renderImageOrders(image) {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_home/ic_home.png')}
    />
  );
}
function renderImageMore(image) {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_home/ic_home.png')}
    />
  );
}
export default DrawerNavigator;

const styles = {
  drawerActive: {
    tintColor: '#e91e63',
  },
  drawerInActive: {
    tintColor: '#aeaeae',
  },
};
