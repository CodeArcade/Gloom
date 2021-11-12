export default interface Element {
  Name: string;
  Icon?: string;
  Stage: ElementStage
}

export enum ElementStage {
  Full,
  Half,
  Empty,
}
