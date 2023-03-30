import { Skeleton, SkeletonText, HStack, ListItem } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
    </ListItem>
  );
};

export default GameCardSkeleton;
