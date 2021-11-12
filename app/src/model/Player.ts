import Effect from "./Effect";

export default interface Player {
  Name: string;
  Icon: string;
  Health: number;
  MaxHealth: number;
  Experience: number;
  Shield: number;
  Vengeance: number;
  VengeanceRange: number;
  AttackBonus: number;
  Effects: Effect[];
}