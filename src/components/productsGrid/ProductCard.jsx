import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action";
export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { id, name, imageURL, price } = product;
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const itemExists = cart.find((item) => item.id === id);
    if (cart.length === 0) {
      dispatch(addToCart({ id, name, imageURL, price, quantity: 1 }));
    } else if (!itemExists) {
      dispatch(addToCart({ id, name, imageURL, price, quantity: 1 }));
    }
  };

  return (
    <Stack
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
      spacing={useBreakpointValue({ base: "4", md: "5" })}
      {...rootProps}
    >
      <Box position="relative" p="10px">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageURL}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>
      </Box>
      <Stack p="0 10px">
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} currency="INR" />
        </Stack>
      </Stack>
      <Stack align="center" p="0 10px 20px 10px">
        <Button colorScheme="blue" width="full" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};
