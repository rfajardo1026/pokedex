import { HStack, Image, Text } from "@chakra-ui/react";
import pokemonLogo from "../assets/pokemon_logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={pokemonLogo} boxSize="60px" width="90px" />
      <ColorModeSwitch />
    </HStack>
  );
}
