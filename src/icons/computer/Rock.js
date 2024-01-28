import ComputerGameIcon from "./Icon";

function UserRockIcon({ currentOption, setCurrentOption, color, borderSize }) {
  return (
    <ComputerGameIcon
      iconSrc={`/assets/game-icons/rock/${color}.png`}
      iconOption="rock"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserRockIcon;
