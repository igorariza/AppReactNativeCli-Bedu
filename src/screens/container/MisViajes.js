import React, {Fragment} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Store from '../../store/store';
import {useNavigation} from '@react-navigation/native';

const MisViajes = props => {
  const navigation = useNavigation();  
  return (
    <Fragment> 
        <Text>Mis Viajes</Text>    
    </Fragment>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e350a8',
    borderRadius: 5,
  },  
  buttonLabel: {
    color: 'white',
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MisViajes;
