import { Button } from "@chakra-ui/react";
import UserChoice from "./UserChoice";
import { Box, Flex } from "@chakra-ui/react";

import UserProfile from "./UserProfile";

function User({ userName, option, setOption, points }) {
  return (
    <Flex>
      <Box w="600px" h="500px" bg="white">
        <UserProfile userName={userName} points={points}></UserProfile>
        <UserChoice option={option} setOption={setOption} />
      </Box>
    </Flex>
  );
}

export default User;
