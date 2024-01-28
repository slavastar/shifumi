import ComputerGameIcon from "./Icon";

function UserScissorsIcon({ currentOption, setCurrentOption, color, borderSize }) {
  return (
    <ComputerGameIcon
      iconSrc={`/assets/game-icons/scissors/${color}.png`}
      iconOption="scissors"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserScissorsIcon;
