import "./App.css";
import User from "./User";
import Computer from "./Computer";
import {
  Box,
  Heading,
  Stack,
  Button,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import Statistics from "./Statistics";
import Menu from "./Menu";
import defaultAvatar from "./assets/avatars/avatar-1.png";

const getRandomOption = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const getGameResult = (first, second) => {
  if (first === second) {
    return "draw";
  } else if (
    (first === "paper" && second === "rock") ||
    (first === "rock" && second === "scissors") ||
    (first === "scissors" && second === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
};

function App() {
  const [userName, setUserName] = useState("Player");
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [userOption, setUserOption] = useState("rock");
  const [computerOption, setComputerOption] = useState(null);
  const [games, setGames] = useState([]);
  const [userColor, setUserColor] = useState("teal");
  const [computerColor, setComputerColor] = useState("red");

  const playGame = () => {
    const randomOption = getRandomOption();
    setComputerOption(randomOption);
    const result = getGameResult(userOption, randomOption);
    switch (result) {
      case "win":
        setUserPoints((points) => points + 1);
        break;
      case "draw":
        setUserPoints((points) => points + 0.5);
        setComputerPoints((points) => points + 0.5);
        break;
      case "lose":
        setComputerPoints((points) => points + 1);
        break;
    }

    const game = {
      userOption: userOption,
      computerOption: randomOption,
      result: result,
    };
    setGames((games) => [...games, game]);
  };

  return (
    <div className="App">
      <Heading>Shifumi</Heading>
      <Wrap spacing="10px" justify="center">
        <WrapItem></WrapItem>

        <WrapItem>
          <User
            userName={userName}
            avatar={userAvatar}
            option={userOption}
            setOption={setUserOption}
            points={userPoints}
          ></User>
        </WrapItem>

        <WrapItem>
          <Computer
            playerName="Computer"
            option={computerOption}
            setOption={setComputerOption}
            points={computerPoints}
          ></Computer>
        </WrapItem>

        <WrapItem>
          <Box w="600px" h="400px" bg="gray.100">
            <Statistics games={games}></Statistics>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box w="600px" h="400px" bg="gray.100">
            <Menu
              userName={userName}
              setUserName={setUserName}
              userAvatar={userAvatar}
              setUserAvatar={setUserAvatar}
              userColor={userColor}
              setUserColor={setUserColor}
              computerColor={computerColor}
              setComputerColor={setComputerColor}
            ></Menu>
          </Box>
        </WrapItem>
      </Wrap>

      <Box border="10" borderColor="gray.200">
        <Button colorScheme="blue" marginTop="5" onClick={playGame}>
          Play
        </Button>
      </Box>
    </div>
  );
}

export default App;
