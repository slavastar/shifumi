import { useState } from "react";
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

function Menu({
  userName,
  setUserName,
  userAvatar,
  setUserAvatar,
  userColor,
  setUserColor,
  computerColor,
  setComputerColor,
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
            <Stack direction="vertical">
              <FormControl>
                <FormLabel>Points to win</FormLabel>
                <Select placeholder="Select option">
                  {[3, 5, 7, 10, 20].map((pointsToWin, i) => (
                    <option value={pointsToWin}>{pointsToWin}</option>
                  ))}
                </Select>

                <Stack direction="row" marginTop="20px">
                  <FormLabel>Share a point in draws</FormLabel>
                  <Switch size="lg" />
                </Stack>
                <Text align="left" color="gray.500">
                  In case of a draw, each player receives 0.5 points.
                </Text>

                <Stack direction="row" marginTop="20px">
                  <FormLabel>Bonus for 3 wins in a row</FormLabel>
                  <Switch size="lg" />
                </Stack>
                <Text align="left" color="gray.500">
                  A player receives an additional point for 3 wins in a row.
                </Text>
              </FormControl>
            </Stack>
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
