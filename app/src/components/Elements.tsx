import React from 'react';
import {View, StyleSheet} from 'react-native';
import Element from './Element';

const ELEMENTS = ['🔥', '❄', '🍃', '🌬', '☀', '🌙'];

export default function Elements() {
  const elems = ELEMENTS.map(x => <Element key={x} element={x} />);
  return <View style={styles.container}>{elems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    maxHeight: '10%',
    width: '100%',
    flexDirection: 'row',
  },
});
