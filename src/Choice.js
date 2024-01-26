// import { useState } from "react";
import { Image, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import rockSrc from "./assets/game-icons/rock.png";
import scissorsSrc from "./assets/game-icons/scissors.png";
import paperSrc from "./assets/game-icons/paper.png";

function Choice({ isComputer }) {
  const [option, setOption] = useState("rock");
  const borderSize = "2px";

  return (
    <Stack direction="row" spacing="30px">
      <Box borderWidth={option == "rock" ? borderSize : 0} borderColor="black">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={rockSrc}
          alt="rock"
          onClick={() => setOption("rock")}
        />
      </Box>
      <Box
        borderWidth={option == "scissors" ? borderSize : 0}
        borderColor="black"
      >
        <Image
          boxSize="100px"
          objectFit="cover"
          src={scissorsSrc}
          alt="rock"
          onClick={() => setOption("scissors")}
        />
      </Box>
      <Box borderWidth={option == "paper" ? borderSize : 0} borderColor="black">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={paperSrc}
          alt="rock"
          onClick={() => setOption("paper")}
        />
      </Box>
    </Stack>
  );
}

export default Choice;
