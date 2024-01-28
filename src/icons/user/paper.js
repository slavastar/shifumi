import UserGameIcon from "./Icon";

function UserPaperIcon({ currentOption, setCurrentOption, color, borderSize }) {
  return (
    <UserGameIcon
      iconSrc={`/assets/game-icons/paper/${color}.png`}
      iconOption="paper"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></UserGameIcon>
  );
}

export default UserPaperIcon;
