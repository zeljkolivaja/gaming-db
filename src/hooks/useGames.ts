import useData from "./useData";

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
  return useData<Game>("/games");
}

export default useGames;
