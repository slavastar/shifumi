import { Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ComputerRockIcon from "./icons/computer/Rock";
import ComputerPaperIcon from "./icons/computer/Paper";
import ComputerScissorsIcon from "./icons/computer/Scissors";

function ComputerChoice({ option, setOption }) {
  const borderSize = "2px";

  return (
    <Center paddingTop="5">
      <Stack direction="row" spacing="30px">
        <ComputerRockIcon
          currentOption={option}
          setCurrentOption={setOption}
          borderSize={borderSize}
        ></ComputerRockIcon>
        <ComputerPaperIcon
          currentOption={option}
          setCurrentOption={setOption}
          borderSize={borderSize}
        ></ComputerPaperIcon>
        <ComputerScissorsIcon
          currentOption={option}
          setCurrentOption={setOption}
          borderSize={borderSize}
        ></ComputerScissorsIcon>
      </Stack>
    </Center>
  );
}

export default ComputerChoice;
