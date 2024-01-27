import { useState } from "react";
import {
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";

import defaultAvatar from "./assets/avatars/avatar-1.png";

function UserProfile({ userName }) {
  const [name, setName] = useState(userName);
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

export default UserProfile;
