import React from 'react';
import Store from '../store/store';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import NavigationTab from './NavigationTab';
import Profile from '../screens/container/Profile';
import Settings from '../screens/container/Settings';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
    const handleDeals = () => {
      navigation.navigate('Deals');
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
          label="Deals"
          onPress={handleDeals}
          icon={renderImageDeals}
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
function renderImageCerrarSesion(image) {
  return (
    <Icon name="sign-out-alt" size={20} color="black" />
  );
}
function renderImageHome(image) {
  return (
    <Image
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
function renderImageDeals(image) {
  return (
    <Image
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
