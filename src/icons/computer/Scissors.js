import ComputerGameIcon from "./Icon";

function UserScissorsIcon({ currentOption, setCurrentOption, color, borderSize, rootDirectory }) {
  return (
    <ComputerGameIcon
      iconSrc={`${rootDirectory}assets/game-icons/scissors/${color}.png`}
      iconOption="scissors"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserScissorsIcon;
