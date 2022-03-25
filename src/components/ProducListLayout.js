import React from 'react';
import 'react-native-gesture-handler';
import {Text, StyleSheet, ImageBackground} from 'react-native';

function ProductListLayout(props) {
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default ProductListLayout;
