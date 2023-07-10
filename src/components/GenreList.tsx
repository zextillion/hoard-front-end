import { Heading, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <GenreListItem key={genre.id} genre={genre} />
        ))}
      </List>
    </>
  );
};

export default GenreList;
