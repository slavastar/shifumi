import paperSrc from "assets/game-icons/paper.png";
import UserGameIcon from "./icon";


function UserPaperIcon({ currentOption, setCurrentOption, borderSize }) {
    return (
      <UserGameIcon
        iconSrc={paperSrc}
        iconOption="paper"
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        borderSize={borderSize}
      >
      </UserGameIcon>
    )
}

export default UserPaperIcon;