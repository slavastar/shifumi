import UserGameIcon from "./Icon";

function UserRockIcon({ currentOption, setCurrentOption, color, borderSize, rootDirectory }) {
  return (
    <UserGameIcon
      iconSrc={`${rootDirectory}assets/game-icons/rock/${color}.png`}
      iconOption="rock"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></UserGameIcon>
  );
}

export default UserRockIcon;
