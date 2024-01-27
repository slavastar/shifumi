import "./App.css";
import User from "./User";
import { Box, Heading, Stack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Heading>Shifumi</Heading>
      <Stack direction="row">
        <User playerName="Slava"></User>
        <User playerName="Computer"></User>
      </Stack>
    </div>
  );
}

export default App;
