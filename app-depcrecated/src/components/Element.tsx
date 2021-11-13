import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ElementStage} from '../model/Element';

interface ElementProps {
  element: string;
}

export default function Element({element}: ElementProps) {
  const [status, setStatus] = useState<ElementStage>(ElementStage.Empty);

  return (
    <TouchableOpacity
      onPress={() => {
        setStatus((status + 1) % 3);
      }}
      style={styles.element}>
      <View>
        <Text style={styles.text}>{element}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  element: {
    flex: 1,
    width: 100 / 6 + '%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});
