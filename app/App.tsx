/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Elements from './src/components/Elements';
import PlayerControls from './src/components/PlayerControls';
import PlayerOverview from './src/components/PlayerOverview';

const App = () => {
  return (
    <View style={styles.container}>
      <Elements />
      <PlayerControls
        player={{
          Name: 'John Doe',
          AttackBonus: 0,
          Experience: 0,
          Effects: [],
          Health: 9,
          MaxHealth: 9,
          Icon: '🎉',
          Shield: 0,
          Vengeance: 0,
          VengeanceRange: 0,
        }}
      />
      <PlayerOverview
        player={{
          Name: 'Spieler 1',
          AttackBonus: 0,
          Experience: 0,
          Effects: [],
          Health: 9,
          MaxHealth: 9,
          Icon: '🎉',
          Shield: 0,
          Vengeance: 0,
          VengeanceRange: 0,
        }}
      />
      <PlayerOverview 
        player={{
          Name: 'Spieler 2',
          AttackBonus: 0,
          Experience: 0,
          Effects: [],
          Health: 9,
          MaxHealth: 9,
          Icon: '🎉',
          Shield: 0,
          Vengeance: 0,
          VengeanceRange: 0,
        }}
      />
      <PlayerOverview 
        player={{
          Name: 'Spieler 3',
          AttackBonus: 0,
          Experience: 0,
          Effects: [],
          Health: 9,
          MaxHealth: 9,
          Icon: '🎉',
          Shield: 0,
          Vengeance: 0,
          VengeanceRange: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
