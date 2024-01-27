import scissorsSrc from "assets/game-icons/scissors.png";
import ComputerGameIcon from "./Icon";

function UserScissorsIcon({ currentOption, setCurrentOption, borderSize }) {
  return (
    <ComputerGameIcon
      iconSrc={scissorsSrc}
      iconOption="scissors"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserScissorsIcon;
