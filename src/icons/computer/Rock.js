import rockSrc from "assets/game-icons/rock.png";
import ComputerGameIcon from "./Icon";

function UserRockIcon({ currentOption, setCurrentOption, borderSize }) {
  return (
    <ComputerGameIcon
      iconSrc={rockSrc}
      iconOption="rock"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></ComputerGameIcon>
  );
}

export default UserRockIcon;
