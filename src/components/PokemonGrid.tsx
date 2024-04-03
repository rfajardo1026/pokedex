import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Pokemon {
  id: number;
  name: string;
}

interface FetchPokemonResponse {
  count: number;
  results: Pokemon[];
}

export default function PokemonGrid() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchPokemonResponse>("/pokemon")
      .then((res) => setPokemon(res.data.results))
      .catch((err) => setError(err.message));
  });

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
