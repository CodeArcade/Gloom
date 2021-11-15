import React, {useState} from 'react';
// import {View} from 'react-native';
// import Screens from './src/model/Screens';
// import Game from './src/pages/Game';
import MainMenu from './src/pages/MainMenu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from './src/pages/Game';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // switch (screen) {
  //   case Screens.MainMenu:
  //     return <MainMenu onJoinGame={() => changeScreen(Screens.Game)} />;
  //   case Screens.Game:
  //     return <Game />;
  // }
};

export default App;
