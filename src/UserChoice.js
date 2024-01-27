import { Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import UserRockIcon from "./icons/user/rock";
import UserPaperIcon from "./icons/user/paper";
import UserScissorsIcon from "./icons/user/scissors";

function UserChoice() {
  const [option, setOption] = useState("rock");
  const borderSize = "2px";

  return (
    <Center paddingTop="5">
      <Stack direction="row" spacing="30px">
        <UserRockIcon
          currentOption={option}
          setCurrentOption={setOption}
          borderSize={borderSize}
        ></UserRockIcon>
        <UserPaperIcon
          currentOption={option}
          setCurrentOption={setOption}
          borderSize={borderSize}
        ></UserPaperIcon>
        <UserScissorsIcon
          currentOption={option}
          setCurrentOption={setOption}
          borderSize={borderSize}
        ></UserScissorsIcon>
      </Stack>
    </Center>
  );
}

export default UserChoice;
