import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import * as React from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/action";
export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchQuery((prev) => e.target.value);
    if (searchQuery) {
      const words = searchQuery.trim().toLowerCase().split(/\s+/);
      dispatch(searchProduct(words));
    }
  };

  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={RiSearchLine} color="gray.500" fontSize="lg" />
      </InputLeftElement>
      <Input
        value={searchQuery}
        focusBorderColor="blue.500"
        width="full"
        fontSize="sm"
        variant="filled"
        type="text"
        placeholder="What are you looking for?"
        autoComplete="off"
        onChange={handleSearch}
      />
    </InputGroup>
  );
};
