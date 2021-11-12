import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Player from '../model/Player';

interface PlayerOverviewProps {
  player?: Player;
}

export default function PlayerOverview({player}: PlayerOverviewProps) {
  if (player == null) {
    return (
      <View></View>
    )
  }
  return (
    <View style={styles.overviewContainer}>
      <Text>{player.Name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
    color: '#fff',
    maxHeight: Math.floor(50 / 3) + "%",
    padding: 10,
  },
});
