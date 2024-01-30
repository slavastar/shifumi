import UserGameIcon from "./Icon";

function UserPaperIcon({ currentOption, setCurrentOption, color, borderSize, rootDirectory }) {
  return (
    <UserGameIcon
      iconSrc={`${rootDirectory}assets/game-icons/paper/${color}.png`}
      iconOption="paper"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></UserGameIcon>
  );
}

export default UserPaperIcon;
