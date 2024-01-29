import { Image, Center, Heading, Box } from "@chakra-ui/react";

function ComputerProfile({ playerName, points, color }) {
  const defaultAvatar = "/assets/avatars/avatar-1.png";

  return (
    <Box maxWidth="110px">
      <Center borderWidth="5px" borderColor={"#" + color} borderRadius="50%">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={defaultAvatar}
          // src={avatarSrc}
          alt="avatar"
          borderRadius="50%"
        />
      </Center>
      <Heading size="md" marginTop="10px">
        {playerName}
      </Heading>
      <Heading size="md" marginTop="10px">
        Points: {points}
      </Heading>
    </Box>
  );
}

export default ComputerProfile;
