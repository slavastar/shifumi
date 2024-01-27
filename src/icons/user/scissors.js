import scissorsSrc from "assets/game-icons/scissors.png";
import UserGameIcon from "./icon";


function UserScissorsIcon({ currentOption, setCurrentOption, borderSize }) {
    return (
      <UserGameIcon
        iconSrc={scissorsSrc}
        iconOption="scissors"
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        borderSize={borderSize}
      >
      </UserGameIcon>
    )
  }


export default UserScissorsIcon;