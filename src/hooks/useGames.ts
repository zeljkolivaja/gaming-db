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
