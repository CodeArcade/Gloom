import CharacterAddButton from "../components/CharacterAddButton";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <button style={{
        fontSize: 50,
        fontFamily: "Enchanted Land"
      }}>Join Game</button>
      <CharacterAddButton onClick={() => {}} style={{
        position: "absolute",
        top: "50px",
        right: "50px",
        width: "50px",
        height: "50px",
        fill: "white"
      }} />
    </div>
  );
}