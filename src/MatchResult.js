import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";
import GameSettings from "GameSettings";

const getRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

function MatchResult({
  isOpen,
  onClose,
  createGame,
  userName,
  computerName,
  userPoints,
  computerPoints,
  rootDirectory,
}) {
  const winIconSrc = "assets/match-results/win.png";
  const drawIconSrc = "assets/match-results/draw.png";
  const loseIconSrc = "assets/match-results/lose.png";

  const result =
    userPoints > computerPoints
      ? "win"
      : userPoints === computerPoints
      ? "draw"
      : "lose";
  const resultIconSrc = {
    win: winIconSrc,
    draw: drawIconSrc,
    lose: loseIconSrc,
  };
  const resultTexts = {
    win: [
      "Congratulations! You won the match!",
      "You have demonstrated amazing play and won the match!",
      "You have been very consistent throughout the match and you totally deserved the victory!",
    ],
    draw: ["It is a draw! In this competitive match, there is no winner."],
    lose: [
      "Unfortunately, you lost the match. May be the next time, the luck will be on your side!",
    ],
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Match Results</ModalHeader>
        <ModalCloseButton />
        <ModalBody marginTop="10px">
          <Center>
            <Heading size="md" align="center">
              {" "}
              {userName} {userPoints} - {computerPoints} {computerName}
            </Heading>
          </Center>
          <Center>
            <Image
              boxSize="200px"
              objectFit="cover"
              src={`${rootDirectory}${resultIconSrc[result]}`}
              alt={result}
            ></Image>
          </Center>
          <Text align="center">
            {getRandomArrayElement(resultTexts[result])}
          </Text>
        </ModalBody>

        <ModalFooter marginTop="30px">
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              onClose();
              createGame();
            }}
            marginLeft="15px"
          >
            New Game
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MatchResult;
