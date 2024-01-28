import { Image, Center, Heading } from "@chakra-ui/react";

function ComputerProfile({ playerName, points }) {
  const defaultAvatar = "/assets/avatars/avatar-1.png";

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
      <Heading size="lg">{playerName}</Heading>
      <Heading size="md" marginTop="10px">
        Points: {points}
      </Heading>
    </>
  );
}

export default ComputerProfile;
