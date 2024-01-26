import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import Choice from "./Choice";
import {
  Image,
  Stack,
  Box,
  Flex,
  Grid,
  GridItem,
  Center,
  AbsoluteCenter,
  Heading,
  Divider,
} from "@chakra-ui/react";

import defaultAvatar from "./assets/avatars/avatar-1.png";

function Player({ playerName }) {
  const [name, setName] = useState(playerName);
  const [points, setPoints] = useState(0);

  return (
    <Flex>
      <Box w="600px" h="500px" bg="white">
        <Center>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={defaultAvatar}
            alt="rock"
          />
        </Center>
        <Heading size="xl">{name}</Heading>
        <Heading size="md">Points: {points}</Heading>

        <Center paddingTop="5">
          <Choice></Choice>
        </Center>
        <Box border="10" borderColor="gray.200">
          <Button colorScheme="blue" marginTop="5">
            Play
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default Player;
