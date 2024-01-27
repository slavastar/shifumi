import { Image, Box } from "@chakra-ui/react";



function ComputerGameIcon({
    iconSrc,
    iconOption,
    currentOption,
    borderSize,
  }) {
    return (
      <Box
        borderWidth={iconOption == currentOption ? borderSize : 0}
        borderColor="black"
      >
        <Image
          boxSize="100px"
          objectFit="cover"
          src={iconSrc}
          alt={iconOption}
        />
      </Box>
    );
}


export default ComputerGameIcon;