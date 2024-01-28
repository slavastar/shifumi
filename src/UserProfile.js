import { useState } from "react";
import { Image, Center, Heading } from "@chakra-ui/react";

import defaultAvatar from "./assets/avatars/avatar-1.png";

function UserProfile({ playerName, points }) {
  const [avatar, setAvatar] = useState(defaultAvatar);

  const changeAvatar = (e) => {
    const image = e.target.files[0];
    const src = URL.createObjectURL(image);
    console.log(image);
    console.log(src);
    setAvatar(src);
  };

  return (
    <>
      <Center>
        <Image boxSize="100px" objectFit="cover" src={avatar} alt="rock" />
      </Center>

      <input type="file" accept="image/png" onChange={changeAvatar}></input>

      <Heading size="xl">{playerName}</Heading>
      <Heading size="md">Points: {points}</Heading>
    </>
  );
}

export default UserProfile;
