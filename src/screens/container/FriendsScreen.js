import React from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, Button} from 'react-native';

// const storeData = async value => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem('@storage_Key', jsonValue);
//   } catch (e) {
//     // saving error
//   }
// };

const storeData = async value => {
  try {
    await AsyncStorage.setItem('friend', value);
  } catch (e) {
    // saving error
  }
};

const FriendsScreen = props => {
  //console.log('FriendsScreen props: ', props);
  return (
    <View style={styles.container}>
      <Text>Select Subjects Below!</Text>

      {props.friends.possible.map((friend, index) => (
        <Button
          key={friend}
          title={`Add ${friend}`}
          onPress={() => {
            props.dispatch({
              type: 'ADD_FRIEND',
              payload: index,
            });

            storeData(friend);
            console.log('friend: ', friend);
            props.navigation.navigate('Home');
          }}
        />
      ))}

      <Button
        title="Back to home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  const {friends} = state;
  return {friends};
};

export default connect(mapStateToProps)(FriendsScreen);
