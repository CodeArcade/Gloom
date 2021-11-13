import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Player from '../model/Player';
import OverviewStatBlock from './OverviewStatBlock';

interface PlayerOverviewProps {
  player?: Player;
}

export default function PlayerOverview({player}: PlayerOverviewProps) {
  if (player == null) {
    return <View></View>;
  }
  return (
    <View style={styles.overviewContainer}>
      <Text>{player.Name}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{player.Icon}</Text>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.smallStatContainer}>
            <OverviewStatBlock icon="🩸" value={player.Health} />
            <OverviewStatBlock icon="🌟" value={player.Experience} />
            <OverviewStatBlock
              icon="⚔️"
              value={player.AttackBonus}
              showPlus={true}
            />
            <OverviewStatBlock icon="🛡️" value={player.Shield} />
          </View>
        </View>
        <View style={styles.smallStatContainer}>
          <Text>Effekt!</Text>
          <Text>Effekt!</Text>
          <Text>Effekt!</Text>
          <Text>Effekt!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
    color: '#fff',
    maxHeight: Math.floor(50 / 3) + '%',
    padding: 10,
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 40,
  },
  statContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  smallStatContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  }
});
