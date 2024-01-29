import ComputerGameIcon from "./Icon";

function UserRockIcon({ currentOption, setCurrentOption, color, borderSize, rootDirectory }) {
  return (
    <ComputerGameIcon
      iconSrc={`${rootDirectory}assets/game-icons/rock/${color}.png`}
      iconOption="rock"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserRockIcon;
