import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedSort: Platform | null;
  onSelectSort: (platform: Platform) => void;
}

const SortSelector = () => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {selectedSort?.name || "Order by:"} */}
        Order by:
      </MenuButton>
      <MenuList>
        {data.map((sort) => (
          <MenuItem></MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
