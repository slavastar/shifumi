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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Statistics from "./Statistics";
import Menu from "./Menu";
import NewGame from "NewGame";
import MatchResult from "MatchResult";
import Rules from "Rules";
import About from "About";

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
  const defaultAvatar = "/assets/avatars/avatar-1.png";

  const [userName, setUserName] = useState("Player");
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [userOption, setUserOption] = useState("rock");
  const [computerOption, setComputerOption] = useState(null);
  const [games, setGames] = useState([]);
  const [gamesStartedCount, setGamesStartedCount] = useState(0);

  const [isNewGame, setIsNewGame] = useState(false);
  const [isMatchResult, setIsMatchResult] = useState(false);
  const [areRulesOpened, setAreRulesOpened] = useState(false);
  const [isAboutOpened, setIsAboutOpened] = useState(false);
  const [showUserBonus, setShowUserBonus] = useState(false);
  const [showComputerBonus, setShowComputerBonus] = useState(false);

  const [pointsToWin, setPointsToWin] = useState(3);
  const [sharePointsInDraw, setSharePointsInDraw] = useState(false);
  const [bonusForWinsInRow, setBonusForWinsInRow] = useState(false);
  const [userColor, setUserColor] = useState("red");
  const [computerColor, setComputerColor] = useState("twitter");

  const createGame = () => {
    setIsMatchResult(false);
    setGames([]);
    setUserPoints(0);
    setComputerPoints(0);
    setShowUserBonus(false);
    setShowComputerBonus(false);
    setGamesStartedCount((count) => count + 1);
  };

  const isBonus = (allGames, isUser, consecutiveGames) => {
    const who = isUser ? "user" : "computer";
    let lastConsecutiveResults = 0;
    for (let i = games.length - 1; i >= 0; i--) {
      if (
        (who == "user" && allGames[i]["result"] == "win") ||
        (who == "computer" && allGames[i]["result"] == "lose")
      ) {
        lastConsecutiveResults++;
      } else {
        break;
      }
    }
    console.log("Last consecutive results: " + lastConsecutiveResults);
    return (
      lastConsecutiveResults > 0 &&
      lastConsecutiveResults % consecutiveGames == 0
    );
  };

  const playGame = () => {
    setShowUserBonus(false);
    setShowComputerBonus(false);

    const randomOption = getRandomOption();
    setComputerOption(randomOption);
    const result = getGameResult(userOption, randomOption);
    let newUserPoints = userPoints;
    let newComputerPoints = computerPoints;

    const game = {
      userOption: userOption,
      computerOption: randomOption,
      result: result,
    };

    switch (result) {
      case "win":
        const userBonus =
          isBonus([...games, game], true, 2) && bonusForWinsInRow;
        console.log("User bonus: " + userBonus);
        if (userBonus) {
          newUserPoints += 2;
          setShowUserBonus(true);
        } else {
          newUserPoints++;
        }
        break;
      case "draw":
        if (sharePointsInDraw) {
          newUserPoints += 0.5;
          newComputerPoints += 0.5;
        }
        break;
      case "lose":
        const computerBonus =
          isBonus([...games, game], false, 2) && bonusForWinsInRow;
        console.log("Computer bonus: " + computerBonus);
        if (computerBonus) {
          newComputerPoints += 2;
          setShowComputerBonus(true);
        } else {
          newComputerPoints++;
        }
        break;
    }
    setUserPoints(newUserPoints);
    setComputerPoints(newComputerPoints);
    setIsMatchResult(true);

    setGames((games) => [...games, game]);
  };

  return (
    <div className="App">
      <Heading size="2xl" paddingTop="15px">
        Shifumi
      </Heading>

      <Stack
        direction="horizontal"
        justify="center"
        spacing="100px"
        marginTop="20px"
      >
        <Button colorScheme="blue" onClick={() => setIsNewGame(true)}>
          New Game
        </Button>
        <NewGame
          isOpen={isNewGame}
          createGame={createGame}
          onClose={() => setIsNewGame(false)}
          pointsToWin={pointsToWin}
          setPointsToWin={setPointsToWin}
          sharePointsInDraw={sharePointsInDraw}
          setSharePointsInDraw={setSharePointsInDraw}
          bonusForWinsInRow={bonusForWinsInRow}
          setBonusForWinsInRow={setBonusForWinsInRow}
        ></NewGame>

        <MatchResult
          isOpen={
            (userPoints >= pointsToWin || computerPoints >= pointsToWin) &&
            isMatchResult
          }
          onClose={() => setIsMatchResult(false)}
          createGame={() => {
            setIsNewGame(true);
          }}
          userName={userName}
          computerName="Computer"
          userPoints={userPoints}
          computerPoints={computerPoints}
        ></MatchResult>

        <Rules
          isOpen={areRulesOpened}
          onClose={() => setAreRulesOpened(false)}
        />

        <About isOpen={isAboutOpened} onClose={() => setIsAboutOpened(false)} />

        <Button colorScheme="blue" onClick={() => setAreRulesOpened(true)}>
          Rules
        </Button>
        <Button colorScheme="blue" onClick={() => setIsAboutOpened(true)}>
          About
        </Button>
      </Stack>

      <Wrap spacing="10px" justify="center" marginTop="25px">
        <WrapItem>
          <User
            userName={userName}
            avatar={userAvatar}
            option={userOption}
            setOption={setUserOption}
            points={userPoints}
            pointsToWin={pointsToWin}
            color={userColor}
            playGame={playGame}
            showBonus={showUserBonus}
            canPlay={
              userPoints < pointsToWin &&
              computerPoints < pointsToWin &&
              !isNewGame &&
              gamesStartedCount > 0
            }
          ></User>
        </WrapItem>

        <WrapItem>
          <Computer
            playerName="Computer"
            option={computerOption}
            setOption={setComputerOption}
            points={computerPoints}
            pointsToWin={pointsToWin}
            color={computerColor}
            showBonus={showComputerBonus}
          ></Computer>
        </WrapItem>

        <WrapItem>
          <Box w="600px" h="420px" bg="white">
            <Statistics games={games}></Statistics>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box w="600px" h="420px" bg="white">
            <Menu
              userName={userName}
              setUserName={setUserName}
              userAvatar={userAvatar}
              setUserAvatar={setUserAvatar}
              userColor={userColor}
              setUserColor={setUserColor}
              computerColor={computerColor}
              setComputerColor={setComputerColor}
              pointsToWin={pointsToWin}
              sharePointsInDraw={sharePointsInDraw}
              setSharePointsInDraw={setSharePointsInDraw}
              bonusForWinsInRow={bonusForWinsInRow}
              setBonusForWinsInRow={setBonusForWinsInRow}
            ></Menu>
          </Box>
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default App;
