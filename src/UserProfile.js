import { useState } from "react";
import { Image, Center, Heading, Box } from "@chakra-ui/react";

function UserProfile({ userName, avatar, points }) {
  return (
    <Box>

      <Center>
        <Image boxSize="100px" objectFit="cover" src={avatar} alt="rock" />
      </Center>

      <Heading size="lg">{userName}</Heading>
      <Heading size="md" marginTop="10px">
        Points: {points}
      </Heading>
    </Box>
  );
}

export default UserProfile;
