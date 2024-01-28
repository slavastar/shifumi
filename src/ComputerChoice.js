import { Center, Stack } from "@chakra-ui/react";
import ComputerRockIcon from "./icons/computer/Rock";
import ComputerPaperIcon from "./icons/computer/Paper";
import ComputerScissorsIcon from "./icons/computer/Scissors";

function ComputerChoice({ option, setOption, color }) {
  const borderSize = "3px";

  return (
    <Center paddingTop="5">
      <Stack direction="row" spacing="30px">
        <ComputerRockIcon
          currentOption={option}
          setCurrentOption={setOption}
          color={color}
          borderSize={borderSize}
        ></ComputerRockIcon>
        <ComputerPaperIcon
          currentOption={option}
          setCurrentOption={setOption}
          color={color}
          borderSize={borderSize}
        ></ComputerPaperIcon>
        <ComputerScissorsIcon
          currentOption={option}
          setCurrentOption={setOption}
          color={color}
          borderSize={borderSize}
        ></ComputerScissorsIcon>
      </Stack>
    </Center>
  );
}

export default ComputerChoice;
