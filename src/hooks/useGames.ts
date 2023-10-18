import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //   due to api design, parent platforms is array of objects, where
  //   each object has platform property of type Platform
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    //FetchGameResponse provide shape of response object (interface)
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "CanceledError") {
          return;
        }
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;
