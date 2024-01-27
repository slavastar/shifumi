import { useState } from "react";
import {
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";

import defaultAvatar from "./assets/avatars/avatar-1.png";

function ComputerProfile({ userName, points }) {
  const [name, setName] = useState(userName);

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

export default ComputerProfile;
