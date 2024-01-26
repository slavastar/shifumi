import "./App.css";
import Player from "./Player";
import { Box, Heading, Stack } from "@chakra-ui/react";

function App() {

  const [playerOption, setPlayerOption] = useState('rock')
  const [computerOption, setComputerOption] = useState(null)

  return (
    <div className="App">
      <Heading>Shifumi</Heading>
      <Stack direction="row">
        <Player playerName="Slava" isComputer={false} setPlayerOption={playerOption} ></Player>
        <Player playerName="Computer" isComputer={true} option={computerOption}></Player>
      </Stack>
    </div>
  );
}

export default App;
