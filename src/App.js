import "./App.css";
import Player from "./Player";
import { Box, Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Heading>Shifumi</Heading>
      <Player playerName="Cool"></Player>
    </div>
  );
}

export default App;
