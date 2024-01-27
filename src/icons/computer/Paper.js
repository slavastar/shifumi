import paperSrc from "assets/game-icons/paper.png";
import ComputerGameIcon from "./Icon";

function UserPaperIcon({ currentOption, setCurrentOption, borderSize }) {
  return (
    <ComputerGameIcon
      iconSrc={paperSrc}
      iconOption="paper"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserPaperIcon;
