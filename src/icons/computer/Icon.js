import { Image, Box } from "@chakra-ui/react";



function ComputerGameIcon({
    iconSrc,
    iconOption,
    currentOption,
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
        />
      </Box>
    );
}


export default ComputerGameIcon;