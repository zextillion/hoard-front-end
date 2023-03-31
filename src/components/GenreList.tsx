import { Heading, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <GenreListItem
            key={genre.id}
            genre={genre}
            onSelectGenre={onSelectGenre}
            selected={selectedGenre?.id === genre.id}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
