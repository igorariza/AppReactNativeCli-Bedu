import React from 'react';
import {View, StyleSheet} from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

export default VerticalSeparator;
