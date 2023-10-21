import logo from "../assets/PokemonLogo.png";
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} h="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
