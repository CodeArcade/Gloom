import Player from "./Player";

export default interface Game {
  id: string;
  Players: Player[];
  Elements: Element[];
}
