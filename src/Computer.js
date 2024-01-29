import ComputerChoice from "./ComputerChoice";
import { Box, Center, Stack, Image, Spacer } from "@chakra-ui/react";

import ComputerProfile from "./ComputerProfile";

function Computer({
  playerName,
  option,
  setOption,
  points,
  setPoints,
  pointsToWin,
  color,
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

          <ComputerProfile
            playerName={playerName}
            points={points}
            setPoints={setPoints}
            color={color}
          ></ComputerProfile>

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

      <ComputerChoice option={option} setOption={setOption} color={color} />
    </Box>
  );
}

export default Computer;
