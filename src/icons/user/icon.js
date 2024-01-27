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
        borderWidth={iconOption == currentOption ? borderSize : 0}
        borderColor="black"
      >
        <Image
          boxSize="100px"
          objectFit="cover"
          src={iconSrc}
          alt={iconOption}
          onClick={() => setCurrentOption(iconOption)}
        />
      </Box>
    );
}


export default UserGameIcon;