import { Text } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";

export default function PokemonGrid() {
  const { pokemon, error } = usePokemon();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {pokemon.map((p) => (
          <li>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
