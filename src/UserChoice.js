import { Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import UserRockIcon from "icons/user/Rock";
import UserScissorsIcon from "icons/user/Scissors";
import UserPaperIcon from "icons/user/Paper";

function UserChoice({ option, setOption, color }) {
  const borderSize = "3px";

  return (
    <Center paddingTop="5">
      <Stack direction="row" spacing="30px">
        <UserRockIcon
          currentOption={option}
          setCurrentOption={setOption}
          color={color}
          borderSize={borderSize}
        ></UserRockIcon>
        <UserPaperIcon
          currentOption={option}
          setCurrentOption={setOption}
          color={color}
          borderSize={borderSize}
        ></UserPaperIcon>
        <UserScissorsIcon
          currentOption={option}
          setCurrentOption={setOption}
          color={color}
          borderSize={borderSize}
        ></UserScissorsIcon>
      </Stack>
    </Center>
  );
}

export default UserChoice;
