import { Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import UserRockIcon from "./icons/user/Rock";
import UserPaperIcon from "./icons/user/Paper";
import UserScissorsIcon from "./icons/user/Scissors";

function UserChoice({ option, setOption }) {
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
