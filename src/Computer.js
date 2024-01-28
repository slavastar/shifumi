import ComputerChoice from "./ComputerChoice";
import { Box, Flex } from "@chakra-ui/react";

import ComputerProfile from "./ComputerProfile";

function Computer({ playerName, option, setOption, points, setPoints, color }) {
  return (
    <Box w="600px" h="400px" minWidth="600px" bg="gray.100">
      <ComputerProfile
        playerName={playerName}
        points={points}
        setPoints={setPoints}
      ></ComputerProfile>
      <ComputerChoice option={option} setOption={setOption} color={color} />
    </Box>
  );
}

export default Computer;
