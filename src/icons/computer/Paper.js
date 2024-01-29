import ComputerGameIcon from "./Icon";

function UserPaperIcon({ currentOption, setCurrentOption, color, borderSize, rootDirectory }) {

  return (
    <ComputerGameIcon
      iconSrc={`${rootDirectory}assets/game-icons/paper/${color}.png`}
      iconOption="paper"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserPaperIcon;
