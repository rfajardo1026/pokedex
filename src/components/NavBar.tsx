import { HStack, Image, Text } from "@chakra-ui/react";
import pokemonLogo from "../assets/pokemon_logo.webp";

export default function NavBar() {
  return (
    <HStack>
      <Image src={pokemonLogo} boxSize="60px" width="90px" />
      <Text>NavBar</Text>
    </HStack>
  );
}
