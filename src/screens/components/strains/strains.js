import {SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('friend');
    if (value !== null) {
      // value previously stored
      console.log(value);
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

const Strains = props => {
  const [strain, setStrain] = useState('');

  useEffect(() => {
    async function loadStorage() {
      setStrain(await getData());
    }
    loadStorage();
  }, []);
  return (
    <SafeAreaView>
      <Text>{strain}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  const {friends} = state;
  return {friends};
};

export default connect(mapStateToProps)(Strains);
