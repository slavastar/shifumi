import {
  Text,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Switch,
  Image,
} from "@chakra-ui/react";

import { useEffect } from "react";

function GameSettings({
  fixed,
  pointsToWin,
  setPointsToWin,
  sharePointsInDraw,
  setSharePointsInDraw,
  bonusForWinsInRow,
  setBonusForWinsInRow,
  rootDirectory
}) {
  useEffect(() => {}, [sharePointsInDraw, bonusForWinsInRow]);

  const trueIconSrc = `${rootDirectory}assets/boolean-icons/true.png`
  const falseIconSrc = `${rootDirectory}assets/boolean-icons/false.png`;

  return (
    <Stack direction="vertical">
      <FormControl>
        {!fixed ? (
          <>
            <FormLabel>Points to win</FormLabel>
            <Select
              defaultChecked={3}
              onChange={(e) => setPointsToWin(e.target.value)}
            >
              {[3, 5, 7, 10, 20].map((pointsToWin, i) => (
                <option key={pointsToWin} value={pointsToWin}>{pointsToWin}</option>
              ))}
            </Select>
          </>
        ) : (
          <FormLabel align="left">Points to win: {pointsToWin} </FormLabel>
        )}
        <Text align="left" color="gray.500">
          The first player to get {pointsToWin} points, wins the match.
        </Text>

        <Stack direction="row" marginTop="20px">
          <FormLabel>Share a point in draws</FormLabel>
          {fixed ? (
            <Image
              boxSize="25px"
              objectFit="cover"
              src={sharePointsInDraw ? trueIconSrc : falseIconSrc}
              alt="true"
            ></Image>
          ) : (
            <Switch
              size="lg"
              isDisabled={fixed}
              defaultChecked={sharePointsInDraw}
              onChange={(e) => setSharePointsInDraw(!sharePointsInDraw)}
            />
          )}
        </Stack>
        <Text align="left" color="gray.500">
          In case of a draw,
          {sharePointsInDraw
            ? " each player receives 0.5 points"
            : " nobody gains a point"}
          .
        </Text>

        <Stack direction="row" marginTop="20px">
          <FormLabel>Bonus for 3 wins in a row</FormLabel>
          {fixed ? (
            <Image
              boxSize="25px"
              objectFit="cover"
              src={bonusForWinsInRow ? trueIconSrc : falseIconSrc}
              alt="true"
            ></Image>
          ) : (
            <Switch
              size="lg"
              isDisabled={fixed}
              defaultChecked={bonusForWinsInRow}
              onChange={(e) => {
                setBonusForWinsInRow(!bonusForWinsInRow);
              }}
            />
          )}
        </Stack>
        <Text align="left" color="gray.500">
          A player {bonusForWinsInRow ? "receives" : "does not receive"} an
          additional point for 3 wins in a row.
        </Text>
      </FormControl>
    </Stack>
  );
}

export default GameSettings;
