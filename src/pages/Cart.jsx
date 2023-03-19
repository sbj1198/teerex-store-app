import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { CartItem } from "../components/cart/CartItem";
import { CartOrderSummary } from "../components/cart/CartOrderSummary";
import { Link as RouteLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../redux/action";
export const Cart = () => {
  const cartData = useSelector((store) => store.cart);
  const [quantity, SetQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const onChangeQuantity = (e) => {
    SetQuantity(e.target.value);
  };

  const onClickDelete = (id) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            {`Shopping Cart (${cartData.length} ${
              cartData.length > 1 ? "items" : "item"
            })`}
          </Heading>

          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem onClickDelete={onClickDelete} key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("blue.500", "blue.200")} as={RouteLink} to="/">
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
