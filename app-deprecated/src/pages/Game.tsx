import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, StyleSheet, BackHandler, Alert} from 'react-native';
import Elements from '../components/Elements';
import PlayerControls from '../components/PlayerControls';
import PlayerOverview from '../components/PlayerOverview';
import ParamList from '../model/props';

type props = NativeStackScreenProps<ParamList, 'Home'>;

const Game = ({navigation}: props) => {
  useEffect(() => {
    const handler = BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert('Exit lobby?', 'Do you want to exit the lobby?', [
        {
          text: 'Nay',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yay',
          onPress: () => navigation.goBack(),
        },
      ]);
      return true;
    });

    return () => handler.remove();
  });

  return (
    <View style={styles.container}>
      <Elements />
      <PlayerControls
        player={{
          Id: "asfh",
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
          Id: "das",
          Name: 'Spieler 1',
          AttackBonus: 1,
          Experience: 0,
          Effects: [],
          Health: 12,
          MaxHealth: 15,
          Icon: '🎈',
          Shield: 0,
          Vengeance: 0,
          VengeanceRange: 0,
        }}
      />
      <PlayerOverview
        player={{
          Id: "dasasf",
          Name: 'Spieler 2',
          AttackBonus: 0,
          Experience: 0,
          Effects: [],
          Health: 9,
          MaxHealth: 9,
          Icon: '🍕',
          Shield: 0,
          Vengeance: 0,
          VengeanceRange: 0,
        }}
      />
      <PlayerOverview
        player={{
          Id: "dasaslkdhgbj",
          Name: 'Spieler 3',
          AttackBonus: 0,
          Experience: 0,
          Effects: [],
          Health: 9,
          MaxHealth: 9,
          Icon: '🏔',
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

export default Game;
