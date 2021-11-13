import { ParamListBase } from "@react-navigation/routers";
import Player from "./Player";

type ParamList = {
  Home: undefined;
  Game: {
    player?: Player,
    uuid?: string,
  };
  CharacterCreation: undefined;
}

export default ParamList;