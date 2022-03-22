import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@storage_Key');
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//   }
// };

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export default function Strains() {
  var dat = getData();
  return (
    <SafeAreaView>
      <Text>{dat}</Text>
    </SafeAreaView>
  );
}
