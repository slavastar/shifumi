import { Button } from "@chakra-ui/react";
import UserChoice from "./UserChoice";
import { Box, Flex } from "@chakra-ui/react";

import UserProfile from "./UserProfile";

function User({ playerName, option, setOption, points }) {
  return (
    <Box w="600px" h="400px" bg="gray.100">
      <UserProfile playerName={playerName} points={points}></UserProfile>
      <UserChoice option={option} setOption={setOption} />
    </Box>
  );
}

export default User;
