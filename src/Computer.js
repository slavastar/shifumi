import ComputerChoice from "./ComputerChoice";
import { Box, Flex } from "@chakra-ui/react";

import ComputerProfile from "./ComputerProfile";

function Computer({ playerName, option, setOption, points, setPoints }) {
  return (
    <Box w="600px" h="400px" minWidth="600px" bg="gray.200">
      <ComputerProfile
        playerName={playerName}
        points={points}
        setPoints={setPoints}
      ></ComputerProfile>
      <ComputerChoice option={option} setOption={setOption} />
    </Box>
  );
}

export default Computer;
