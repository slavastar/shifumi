import { Image, Center, Heading, Box } from "@chakra-ui/react";

function UserProfile({ userName, avatar, points, color }) {

  return (
    <Box maxWidth="120px">
      <Center borderWidth="5px" borderColor={"#" + color} borderRadius="50%">
        <Image
          boxSize="110px"
          objectFit="cover"
          src={avatar}
          alt="avatar"
          borderRadius="50%"
        />
      </Center>

      <Heading size="md" marginTop="10px">{userName}</Heading>
      <Heading size="md" marginTop="10px">
        Points: {points}
      </Heading>
    </Box>
  );
}

export default UserProfile;
