import useGenres from "./useGenres";

const useGenre = (id?: number) =>
  useGenres().data?.results.find((g) => g.id === id);

export default useGenre;
