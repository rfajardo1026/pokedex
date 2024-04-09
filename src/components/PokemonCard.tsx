import { Pokemon } from "../hooks/usePokemon";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src="https://staticg.sportskeeda.com/editor/2020/12/aed95-16091724361860-800.jpg?w=640" />
      <CardBody>
        <Heading fontSize="2xl">{pokemon.name}</Heading>
      </CardBody>
    </Card>
  );
}
