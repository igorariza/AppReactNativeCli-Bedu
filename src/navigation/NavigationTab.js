import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import NavigationHome from './NavigationHome';
//import SearchScreen from '../screens/components/search/search';
import StrainsScreen from '../screens/components/strains/strains';
import FriendsScreen from '../screens/container/FriendsScreen';
import {Ionicons} from '@expo/vector-icons';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

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
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/ic_home/ic_home.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      {/* Tab-SearchScreen */}
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarLabel: 'Friends',
        }}
      />
      {/* Tab-DealsScreen */}
      <Tab.Screen
        name="Deals"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderImageMenu(),
        }}
        component={NavigationHome}
      />
      {/* Tab-StrainsScreen */}
      <Tab.Screen
        name="Strains"
        component={StrainsScreen}
        options={{
          tabBarLabel: 'Strains',
          // tabBarIcon: (color, size) => (
          //   <Icon name="leaf" size={23} color={color} />
          // ),
        }}
      />
      {/* Tab-ProfileScreen */}
      <Tab.Screen
        name="More"
        component={NavigationHome}
        options={{
          tabBarLabel: 'More',
          // tabBarIcon: (color, size) => (
          //   <Icon name="plus" size={23} color={color} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabLayout;

function renderImageMenu(image) {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        top: -10,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../../assets/agtech_logo.png')}
    />
  );
}
