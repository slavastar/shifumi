import UserGameIcon from "./Icon";

function UserScissorsIcon({
  currentOption,
  setCurrentOption,
  color,
  borderSize,
  rootDirectory
}) {
  return (
    <UserGameIcon
      iconSrc={`${rootDirectory}assets/game-icons/scissors/${color}.png`}
      iconOption="scissors"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></UserGameIcon>
  );
}

export default UserScissorsIcon;
