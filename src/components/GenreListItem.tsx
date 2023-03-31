import { ListItem, HStack, Image, Text, Button } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selected: boolean;
}

const GenreListItem = ({ genre, onSelectGenre, selected }: Props) => {
  return (
    <ListItem key={genre.id} paddingY="5px">
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
        ></Image>
        <Button
          onClick={() => onSelectGenre(genre)}
          fontSize="lg"
          variant="link"
          fontWeight={selected ? "bold" : "normal"}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
