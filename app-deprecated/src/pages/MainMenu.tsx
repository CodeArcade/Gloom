import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import ParamList from '../model/props';

type props = NativeStackScreenProps<ParamList, 'Home'>;

export default function MainMenu({navigation}: props) {
  return (
    <View style={styles.container}>
      <Button
        title="Join Game"
        onPress={() => {
          navigation.navigate('Game', {});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
