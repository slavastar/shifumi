import { Button } from "@chakra-ui/react";
import UserChoice from "./UserChoice";
import { Box, Flex } from "@chakra-ui/react";

import UserProfile from "./UserProfile";

function User({ userName, avatar, option, setOption, points, playGame, canPlay }) {
  return (
    <Box w="600px" h="400px" bg="gray.100">
      <UserProfile userName={userName} avatar={avatar} points={points}></UserProfile>
      <UserChoice option={option} setOption={setOption} />
      <Box border="10" borderColor="gray.200">
        <Button colorScheme="blue" marginTop="5" onClick={playGame} isDisabled={!canPlay}>
          Play
        </Button>
      </Box>
    </Box>
  );
}

export default User;
