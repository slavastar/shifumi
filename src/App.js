import "./App.css";
import User from "./User";
import Computer from "./Computer";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

function App() {

  const [userOption, setUserOption] = useState("rock")  
  const [computerOption, setComputerOption] = useState(null)

  return (
    <div className="App">
      <Heading>Shifumi</Heading>
      <Stack direction="row">
        <User
        playerName="Slava"
        option={userOption}
        setOption={setUserOption}
        ></User>
        <Computer
        playerName="Computer"
        option={computerOption}
        setOption={setComputerOption}
        ></Computer>
      </Stack>
    </div>
  );
}

export default App;
