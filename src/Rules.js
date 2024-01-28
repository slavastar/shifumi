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
  Link,
  Heading,
} from "@chakra-ui/react";

function Rules({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Rules</ModalHeader>
        <ModalCloseButton />

        <ModalBody marginTop="10px">
          <Heading size="md">Description</Heading>
          <Text marginTop="10px" align="justify">
            Rock paper scissors (commonly scissors, paper, rock or stone in
            Australia and New Zealand) is an intransitive hand game, usually
            played between two people, in which each player simultaneously forms
            one of three shapes with an outstretched hand. These shapes are
            "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a
            fist with the index finger and middle finger extended, forming a V).
            The earliest form of "rock paper scissors"-style game originated in
            China and was subsequently imported into Japan, where it reached its
            modern standardized form, before being spread throughout the world
            in the early 20th century.
          </Text>

          <Text marginTop="10px" align="justify">
            A simultaneous, zero-sum game, it has three possible outcomes: a
            draw, a win or a loss. A player who decides to play rock will beat
            another player who has chosen scissors ("rock crushes scissors" or
            "breaks scissors" or sometimes "blunts scissors), but will lose to
            one who has played paper ("paper covers rock"); a play of paper will
            lose to a play of scissors ("scissors cuts paper"). If both players
            choose the same shape, the game is tied and is usually replayed to
            break the tie.
          </Text>
          <Heading size="md" marginTop="30px">
            Resources
          </Heading>
          <Link
            marginTop="10px"
            href="https://en.wikipedia.org/wiki/Rock_paper_scissors"
            isExternal
          >
            ⋅ Rock paper scissors | Wikipedia
          </Link>
        </ModalBody>

        <ModalFooter marginTop="30px">
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Rules;
