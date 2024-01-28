import UserGameIcon from "./Icon";

function UserScissorsIcon({ currentOption, setCurrentOption, color, borderSize }) {

  return (
    <UserGameIcon
      iconSrc={`/assets/game-icons/scissors/${color}.png`}
      iconOption="scissors"
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      borderSize={borderSize}
    ></UserGameIcon>
  );
}

export default UserScissorsIcon;
