import { Button } from "@chakra-ui/react";
import UserChoice from "./UserChoice";
import { Box, Flex } from "@chakra-ui/react";

import UserProfile from "./UserProfile";

function User({ userName, avatar, option, setOption, points }) {
  return (
    <Box w="600px" h="400px" bg="gray.100">
      <UserProfile userName={userName} avatar={avatar} points={points}></UserProfile>
      <UserChoice option={option} setOption={setOption} />
    </Box>
  );
}

export default User;
