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
  Heading,
} from "@chakra-ui/react";

function About({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>About</ModalHeader>
        <ModalCloseButton />

        <ModalBody marginTop="10px">
          <Heading size="md">Technologies</Heading>
          <Text marginTop="10px">⋅ JavaScript, ReactJS, Chakra UI</Text>

          <Heading size="md" marginTop="30px">
            Author
          </Heading>
          <Text marginTop="10px">⋅ Vyacheslav Efimov</Text>
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

export default About;
