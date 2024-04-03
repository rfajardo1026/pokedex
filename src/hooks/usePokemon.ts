import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Pokemon {
  id: number;
  name: string;
}

interface FetchPokemonResponse {
  count: number;
  results: Pokemon[];
}

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchPokemonResponse>("/pokemon", { signal: controller.signal })
      .then((res) => setPokemon(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { pokemon, error };
};

export default usePokemon;
