import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>You have {props.friends.current.length} friends.</Text>

      <Button
        title="Add some friends"
        onPress={() => props.navigation.navigate('Friends')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  const {friends} = state;
  return {friends};
};

export default connect(mapStateToProps)(Home);
