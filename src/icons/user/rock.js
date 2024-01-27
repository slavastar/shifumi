import rockSrc from "assets/game-icons/rock.png";
import UserGameIcon from "./icon";

function UserRockIcon({ currentOption, setCurrentOption, borderSize }) {
  return (
    <UserGameIcon
      iconSrc={rockSrc}
      iconOption="rock"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></UserGameIcon>
  );
}

export default UserRockIcon;
