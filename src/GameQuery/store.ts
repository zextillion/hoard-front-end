import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  pageSize?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setPageSize: (pageSize: number) => void;
}

const useGameQueryStore = create<GameQueryStore>(
  (set) =>
    ({
      gameQuery: {},
      setGenreId: (id) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
      setPlatformId: (id) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
      setSortOrder: (sortOrder) =>
        set((store) => ({
          gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
        })),
      setSearchText: (searchText) =>
        set(() => ({
          gameQuery: { searchText: searchText },
        })),
      setPageSize: (pageSize) =>
        set((store) => ({
          gameQuery: { ...store.gameQuery, pageSize: pageSize },
        })),
    } as GameQueryStore)
);

export default useGameQueryStore;
