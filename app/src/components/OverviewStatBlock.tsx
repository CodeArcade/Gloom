import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface OverviewStatBlockProps {
  icon: string;
  value: string | number;
  style?: StyleProp<ViewStyle>;
  showPlus?: boolean;
}

export default function OverviewStatBlock({icon, value, style, showPlus}: OverviewStatBlockProps) {
  if (showPlus == null) {
    showPlus = false;
  }
  return (
    <View style={[styles.statBlock, style]}>
      <Text style={styles.statText}>{icon}</Text>
      <Text style={styles.statText}>{showPlus && (value > 0 && "+")}{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statBlock: {
    flexDirection: "row",
    width: "35%",
    maxHeight: "50%",
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  statText: {
    fontSize: 20,
  }
});