import { Button } from "@chakra-ui/react";
import UserChoice from "./UserChoice";
import { Box, Flex } from "@chakra-ui/react";

import UserProfile from "./UserProfile";

function User({ userName, option, setOption }) {

  return (
    <Flex>
      <Box w="600px" h="500px" bg="white">
        <UserProfile userName={userName}></UserProfile>
          <UserChoice option={option} setOption={setOption} />
            <Box border="10" borderColor="gray.200">
              <Button
              colorScheme="blue"
              marginTop="5"
              onClick={() => 8}
              >
                Play
              </Button>
            </Box>
      </Box>
    </Flex>
  );
}

export default User;
