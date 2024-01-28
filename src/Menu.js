import { useEffect, useState } from "react";
import {
  Image,
  Center,
  Box,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Switch,
  Tooltip,
} from "@chakra-ui/react";
import GameSettings from "GameSettings";

function Menu({
  userName,
  setUserName,
  userAvatar,
  setUserAvatar,
  userColor,
  setUserColor,
  computerColor,
  setComputerColor,
  pointsToWin,
  sharePointsInDraw,
  setSharePointsInDraw,
  bonusForWinsInRow,
  setBonusForWinsInRow
}) {
  const colors = [
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blue",
    "twitter",
    "cyan",
    "teal",
    "whatsapp",
  ];

  const changeAvatar = (e) => {
    const image = e.target.files[0];
    const src = URL.createObjectURL(image);
    console.log(image);
    console.log(src);
    setUserAvatar(src);
  };

  useEffect(() => {}, [sharePointsInDraw, bonusForWinsInRow])

  return (
    <>
      <Heading>Menu</Heading>
      <Tabs marginTop="10px" isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>User information</Tab>
          <Tab>Game settings</Tab>
          <Tab>Color theme</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" defaultValue={userName}></Input>
              <FormLabel marginTop="20px">Avatar</FormLabel>
              <Input type="file" accept="image/png" onChange={changeAvatar} />
            </FormControl>
          </TabPanel>
          <TabPanel>
            <GameSettings fixed={true} pointsToWin={pointsToWin} sharePointsInDraw={sharePointsInDraw}
            bonusForWinsInRow={bonusForWinsInRow}></GameSettings>
          </TabPanel>
          <TabPanel>
            <FormLabel>User color theme</FormLabel>
            <Stack direction="vertical">
              {colors.map((color, i) => (
                    <Button
                    colorScheme={color}
                    size="lg"
                    onClick={() => setUserColor(color)}
                    ></Button>
              ))}
            </Stack>

            <FormLabel marginTop="30px">Computer color theme</FormLabel>
            <Stack direction="vertical">
              {colors.map((color, i) => (
                <Button
                  colorScheme={color}
                  size="lg"
                  onClick={() => setComputerColor(color)}
                ></Button>
              ))}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Menu;
