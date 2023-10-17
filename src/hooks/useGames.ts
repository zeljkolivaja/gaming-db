import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    //FetchGameResponse provide shape of response object (interface)
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error.name === "CanceledError") {
          return;
        }

        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;
