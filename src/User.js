import { Button } from "@chakra-ui/react";
import { useState } from "react";
import UserChoice from "./UserChoice";
import { Box, Flex } from "@chakra-ui/react";

import UserProfile from "./UserProfile";

function User({ userName }) {

    const getRandomOption = () => {
        const options = ['rock', 'paper', 'scissors']
        return options[Math.floor(Math.random() * options.length)];
    }

  return (
    <Flex>
      <Box w="600px" h="500px" bg="white">
        <UserProfile userName={userName}></UserProfile>
          <UserChoice />
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
