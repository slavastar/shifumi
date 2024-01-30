import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import GameSettings from "GameSettings";

function NewGame({
  isOpen,
  onClose,
  createGame,
  pointsToWin,
  sharePointsInDraw,
  bonusForWinsInRow,
  newGameOptions,
  setNewGameOptions
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Game</ModalHeader>
        <ModalCloseButton />
        <ModalBody marginTop="10px">
          <GameSettings
            fixed={false}
            pointsToWin={pointsToWin}
            sharePointsInDraw={sharePointsInDraw}
            bonusForWinsInRow={bonusForWinsInRow}
            newGameOptions={newGameOptions}
            setNewGameOptions={setNewGameOptions}
          />
        </ModalBody>

        <ModalFooter marginTop="30px">
          <Button colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              createGame();
              onClose();
            }}
            marginLeft="15px"
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default NewGame;
