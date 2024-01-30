import { Image, Box } from "@chakra-ui/react";

function UserGameIcon({
  iconSrc,
  iconOption,
  currentOption,
  setCurrentOption,
  borderSize,
}) {
  return (
    <Box
      borderBottomWidth={iconOption == currentOption ? borderSize : 0}
      borderTopWidth={iconOption == currentOption ? borderSize : 0}
      borderColor="black"
      borderRadius="3px"
    >
      <Image
        padding="10px"
        boxSize="110px"
        objectFit="cover"
        src={iconSrc}
        alt={iconOption}
        onClick={() => setCurrentOption(iconOption)}
      />
    </Box>
  );
}

export default UserGameIcon;
