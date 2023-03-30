import { ListItem, HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  return (
    <ListItem key={genre.id} paddingY="5px">
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
        ></Image>
        <Text fontSize="lg">{genre.name}</Text>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
