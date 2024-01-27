import ComputerChoice from "./ComputerChoice";
import { Box, Flex } from "@chakra-ui/react";

import ComputerProfile from "./ComputerProfile";


function Computer({ playerName, option, setOption, points, setPoints }) {

  return (
    <Flex>
      <Box w="600px" h="500px" bg="white">
        <ComputerProfile playerName={playerName} points={points} setPoints={setPoints}></ComputerProfile>
          <ComputerChoice option={option} setOption={setOption} />
      </Box>
    </Flex>
  );
}

export default Computer;
