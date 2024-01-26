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

function PlayerProfile({ playerName }) {
  const [name, setName] = useState(playerName);
  const [points, setPoints] = useState(0);

  return (
    <>
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
    </>
  );
}

export default PlayerProfile;
