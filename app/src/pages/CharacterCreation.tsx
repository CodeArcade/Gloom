import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import ParamList from "../model/props";


type props = NativeStackScreenProps<ParamList, 'CharacterCreation'>;

export default function CharacterCreation({navigation}: props) {
  return <View>Character Creation!</View>;
}