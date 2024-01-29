import { Button, Center } from "@chakra-ui/react";
import UserChoice from "./UserChoice";
import { Box, Stack, Image, Spacer } from "@chakra-ui/react";

import UserProfile from "./UserProfile";

function User({
  userName,
  avatar,
  option,
  setOption,
  points,
  pointsToWin,
  color,
  playGame,
  canPlay,
  showBonus,
}) {
  return (
    <Box w="600px" h="420px" bg="white" padding="10px" overflowY="auto">
      <Center>
        <Stack direction="horizontal">
          <Center w="200px" h="170px">
            {points + 1 >= pointsToWin && (
              <Image
                boxSize="135px"
                objectFit="cover"
                src="/assets/game-results/matchpoint.png"
                alt="matchpoint"
              />
            )}
          </Center>
          <Spacer></Spacer>
          <UserProfile
            userName={userName}
            avatar={avatar}
            points={points}
            color={color}
          ></UserProfile>
          <Spacer></Spacer>
          <Center w="200px" h="170px">
            {showBonus && (
              <Image
                boxSize="135px"
                objectFit="cover"
                src="/assets/game-results/bonus.png"
                alt="bonus"
              />
            )}
          </Center>
        </Stack>
      </Center>
      <UserChoice option={option} setOption={setOption} color={color} />
      <Box border="10" borderColor="gray.200">
        <Button
          colorScheme="blue"
          marginTop="5"
          onClick={playGame}
          isDisabled={!canPlay}
        >
          Play
        </Button>
      </Box>
    </Box>
  );
}

export default User;
