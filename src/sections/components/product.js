import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const tempColor = ['#FF6347', '#FFA500', '#FFD700', '#32CD32'];

function Product(props) {
  console.log('props product view', props);
  return (
    <View style={styles.cardproduct}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.product}>
          <Text style={styles.productName}>{props.product.name}</Text>
          <Text style={styles.productPrice}>{props.product.year}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardproduct: {
    paddingBottom: 10,
  },
  productName: {
    color: '#4c4c4c',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 0,
  },
  product: {
    backgroundColor: tempColor[Math.floor(Math.random() * 3)],
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Product;
