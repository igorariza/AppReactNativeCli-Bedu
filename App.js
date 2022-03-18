import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createSwitchNavigator} from '@react-navigation/compat';
import Loading from './src/sections/components/loading';
import Login from './src/screens/container/Login';
import TabLayout from './src/navigation/NavigationTab';

function App(props) {
  return (
    <NavigationContainer>
      <SwitchNavigator />
    </NavigationContainer>
  );
}
const SwitchNavigator = createSwitchNavigator(
  {
    Loading: {screen: Loading},
    TabLayout: TabLayout,
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  },
);
export default App;
