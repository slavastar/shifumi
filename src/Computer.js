import ComputerChoice from "./ComputerChoice";
import { Box, Flex } from "@chakra-ui/react";

import ComputerProfile from "./ComputerProfile";

function Computer({ userName, option, setOption }) {

    const getRandomOption = () => {
        const options = ['rock', 'paper', 'scissors']
        return options[Math.floor(Math.random() * options.length)];
    }

  return (
    <Flex>
      <Box w="600px" h="500px" bg="white">
        <ComputerProfile userName={userName}></ComputerProfile>
          <ComputerChoice option={option} setOption={setOption} />
      </Box>
    </Flex>
  );
}

export default Computer;
