import ComputerGameIcon from "./Icon";

function UserPaperIcon({ currentOption, setCurrentOption, color, borderSize }) {
  return (
    <ComputerGameIcon
      iconSrc={`/assets/game-icons/paper/${color}.png`}
      iconOption="paper"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserPaperIcon;
