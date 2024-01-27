import "./App.css";
import User from "./User";
import Computer from "./Computer";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";

const getRandomOption = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const getGameResult = (first, second) => {
  if (first === second) {
    return "tie";
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

  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [userOption, setUserOption] = useState("rock");
  const [computerOption, setComputerOption] = useState(null);

  const playGame = () => {
    const randomOption = getRandomOption()
    setComputerOption(randomOption);
    const result = getGameResult(userOption, randomOption);
    switch (result) {
      case "win":
        setUserPoints((points) => points + 1);
        break;
      case "tie":
        setUserPoints((points) => points + 0.5);
        setComputerPoints((points) => points + 0.5);
        break;
      case "lose":
        setComputerPoints((points) => points + 1);
        break;
    }
  };

  return (
    <div className="App">
      <Heading>Shifumi</Heading>
      <Stack direction="row">
        <User
          playerName="Slava"
          option={userOption}
          setOption={setUserOption}
          points={userPoints}
        ></User>

        <Computer
          playerName="Computer"
          option={computerOption}
          setOption={setComputerOption}
          points={computerPoints}
        ></Computer>
      </Stack>

      <Box border="10" borderColor="gray.200">
        <Button colorScheme="blue" marginTop="5" onClick={playGame}>
          Play
        </Button>
      </Box>
    </div>
  );
}

export default App;
