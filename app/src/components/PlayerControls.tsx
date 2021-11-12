import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Player from '../model/Player';

interface PlayerControlsProps {
  player: Player;
}

export default function PlayerControls({player}: PlayerControlsProps) {
  return (
    <View style={styles.container}>
      <Text>Player Controls</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    maxHeight: "40%"
  },
});
