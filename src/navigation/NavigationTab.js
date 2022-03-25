import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import NavigationHome from './NavigationHome';
import Perfil from '../screens/container/Perfil'
import MisViajes from '../screens/container/MisViajes'


const Tab = createBottomTabNavigator();
const TabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Deals"
      screenOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 23,
        },
        style: {
          backgroundColor: '#eaeaea',
        },
      }}>
      {/* Tab-HomeScreen */}
      <Tab.Screen
        name="Home"
        component={NavigationHome}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderImageMisViajes(),
        }}
      />      
      {/* Tab-DealsScreen */}
      <Tab.Screen
        name="Deals"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderImageViaje(),
        }}
        component={NavigationHome}
      />      
      {/* Tab-ProfileScreen */}
      <Tab.Screen
        name="More"
        component={NavigationHome}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderImageSetting(),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabLayout;

function renderImageViaje(image) {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        top: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../../assets/ic_viajes/de-viaje.png')}
    />
  );
}

function renderImageMisViajes(image) {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        top: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../../assets/ic_home/camara.png')}
    />
  );
}

function renderImageSetting(image) {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        top: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../../assets/ic_settings/gear.png')}
    />
  );
}
