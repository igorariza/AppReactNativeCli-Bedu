import React from 'react';
import { Image } from 'react-native';
import {
  createDrawerNavigator, DrawerContentScrollView, DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import NavigationTab from './NavigationTab';
import { useNavigation } from '@react-navigation/native';
import Store from '../store/store';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Viajes"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Viajes"
        component={NavigationTab}
        initialParams={{ ruta: "ViajesTab" }}
        options={{
          title: 'Viajes',
          drawerIcon: () => renderImageViaje()
        }}
      />
      <Drawer.Screen
        name="MisViajes"
        component={NavigationTab}
        initialParams={{ ruta: "MisViajesTab" }}
        options={{
          title: 'Mis Viajes',
          drawerIcon: () => renderImageMisViajes()
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={NavigationTab}
        initialParams={{ ruta: "SettingsTab" }}
        options={{
          title: 'Perfil',
          drawerIcon: () => renderImageSetting()
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const handleClose = () => {
    Store.remove({
      key: 'userLogin',
    });
    navigation.navigate('Login');
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Cerrar Sesión" onPress={handleClose} icon={renderImageCerrarSesion} />
    </DrawerContentScrollView>
  );
}

function renderImageViaje(image) {
  return (
    <Image
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_viajes/de-viaje.png')}
    />
  );
}

function renderImageCerrarSesion(image) {
  return (
    <Image
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_logout/check-out.png')}
    />
  );
}

function renderImageMisViajes(image) {
  return (
    <Image
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_home/camara.png')}
    />
  );
}

function renderImageSetting(image) {
  return (
    <Image
      style={{
        width: 24,
        height: 24,
        top: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
      source={require('../../assets/ic_settings/gear.png')}
    />
  );
}
