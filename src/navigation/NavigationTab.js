import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import NavigationHome from './NavigationHome';
import More from '../screens/container/More';
import Orders from '../screens/container/Orders';

const Tab = createBottomTabNavigator();
const TabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/ic_home/ic_home.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      {/* Tab-SearchScreen */}
      {/* <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: (color, size) => (
            <Icon name="home" size={23} color={color} />
          ),
        }}
      /> */}
      {/* Tab-DealsScreen */}
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderImageMenu(),
        }}
        component={NavigationHome}
      />
      {/* Tab-StrainsScreen */}
      {/* <Tab.Screen
        name="Strains"
        component={StrainsScreen}
        options={{
          tabBarLabel: 'Strains',
          tabBarIcon: (color, size) => (
            <Icon name="leaf" size={23} color={color} />
          ),
        }}
      /> */}
      {/* Tab-ProfileScreen */}
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/icons-more.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabLayout;

function renderImageMenu(image) {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
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
