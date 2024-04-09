import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";

export default function PokemonGrid() {
  const { pokemon, error } = usePokemon();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {pokemon.map((p) => (
          <PokemonCard pokemon={p} />
        ))}
      </SimpleGrid>
    </>
  );
}
