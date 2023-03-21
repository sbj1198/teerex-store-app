import {
  Box,
  Grid,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { CheckboxFilter } from "../components/filters/CheckboxFilter";
import { ColorPicker } from "../components/filters/ColorPicker";
import { PriceRangePicker } from "../components/filters/PriceRangePicker";
import { MobileFilter } from "../components/filters/MobileFilter";
import { colorFilter } from "../components/filters/_data";
import { Products } from "../components/productsGrid/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action";

export const Home = () => {
  const dispatch = useDispatch();
  const tshirts = useSelector((store) => store.tshirts);
  const [checked, setChecked] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const searchedData = useSelector((store) => store.searchedData);

  const handleSelectBox = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handleFilteredData = () => {
    let data = tshirts.filter((tshirt) => {
      if (checked.includes(tshirt.type) && checked.includes(tshirt.gender)) {
        return checked.includes(tshirt.type) && checked.includes(tshirt.gender);
      } else if (checked.includes(tshirt.type)) {
        return checked.includes(tshirt.type);
      } else {
        return checked.includes(tshirt.gender);
      }
    });
    setFilteredData(data);
  };

  React.useEffect(() => {
    if (!tshirts.length) {
      dispatch(getProducts());
    } else {
      handleFilteredData();
    }
  }, [checked]);

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Box mt={{ base: "8", md: "16" }}>
        <Grid templateColumns={{ base: "1fr", md: "240px 1fr" }} gap="14">
          <Stack
            spacing="10"
            maxW="240px"
            display={{ base: "none", md: "flex" }}
          >
            <CheckboxFilter
              spacing="3"
              label="Gender"
              handleSelectBox={handleSelectBox}
            />
            <ColorPicker {...colorFilter} label="Color" />
            <CheckboxFilter
              spacing="3"
              label="Type"
              handleSelectBox={handleSelectBox}
            />
            <Stack spacing="5">
              <label>Price range</label>
              <PriceRangePicker defaultValue={[6, 40]} />
              <HStack spacing="6">
                <Input type="number" placeholder="₹250" />
                <Input type="number" placeholder="₹600" />
              </HStack>
            </Stack>
          </Stack>

          <Box width="full">
            <Stack
              spacing={{ base: "6", md: "4" }}
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="flex-start"
              width="full"
            >
              <Stack direction={{ base: "column", md: "row" }} align="baseline">
                <Heading size="md" fontSize="2xl">
                  {" "}
                  T-Shirts
                </Heading>
                <Text color="gray.500">{`(${tshirts.length} products)`}</Text>
              </Stack>
              <MobileFilter handleSelectBox={handleSelectBox} />
            </Stack>
            <Box
              mt="6"
              borderWidth="2px"
              minH="480px"
              rounded="xl"
              borderStyle="dashed"
            >
              <Products
                tshirts={
                  filteredData.length
                    ? filteredData
                    : searchedData.length
                    ? searchedData
                    : tshirts
                }
              />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
