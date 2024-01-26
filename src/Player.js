import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Choice from "./Choice";
import { Box, Flex, Center } from "@chakra-ui/react";

import PlayerProfile from "./PlayerProfile";

function Player({ isComputer, playerName, playGame, setPlayerOption, setComputerOption }) {

    const getRandomOption = () => {
        const options = ['rock', 'paper', 'scissors']
        return options[Math.floor(Math.random() * options.length)];
    }

  return (
    <Flex>
      <Box w="600px" h="500px" bg="white">
        <PlayerProfile
          playerName={playerName}
          isComputer={isComputer}
        ></PlayerProfile>

        <Center paddingTop="5">
          <Choice isComputer={isComputer}></Choice>
        </Center>
        {!isComputer && (
          <>
            <Box border="10" borderColor="gray.200">
              <Button
              colorScheme="blue"
              marginTop="5"
              onClick={() => {
                setComputerOption(getRandomOption())
                playGame()
              }}
              >
                Play
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
}

export default Player;
