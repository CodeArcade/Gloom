import { CSSProperties } from "react";
import { Plus } from "../icons/UI";

interface CharacterButtonProps {
  style?: CSSProperties;
  onClick: () => void;
}

export default function CharacterAddButton({ style, onClick }: CharacterButtonProps) {

  return (
    <Plus style={style} onClick={() => {
      window.navigator.vibrate(400);
      alert("This feature is not implemented yet. Please check back later :)");
    }} />
  );
}