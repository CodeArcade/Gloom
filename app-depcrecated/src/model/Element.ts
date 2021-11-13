export default interface Element {
  Name: ElementName;
  Icon?: string;
  Stage: ElementStage
}

export enum ElementStage {
  Full,
  Half,
  Empty,
}
// const ELEMENTS = ['🔥', '❄', '🍃', '🌬', '☀', '🌙'];
export enum ElementName {
  Fire,
  Ice,
  Ground,
  Air,
  Light,
  Dark
}