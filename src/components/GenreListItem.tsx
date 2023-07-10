import { ListItem, HStack, Image, Button } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../GameQuery/store";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const selected = selectedGenreId === genre.id;

  return (
    <ListItem key={genre.id} paddingY="5px">
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
          objectFit="cover"
        ></Image>
        <Button
          onClick={() => setSelectedGenreId(genre.id)}
          fontSize="lg"
          variant="link"
          fontWeight={selected ? "bold" : "normal"}
          whiteSpace="normal"
          textAlign="left"
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
