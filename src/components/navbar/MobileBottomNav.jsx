import { Box, SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { items } from "./NavItemIcons";
import { CartCount } from "./CartCount";
import { NavAction } from "./NavAction";
import { useSelector } from "react-redux";
export const MobileBottomNav = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <Box
      bg={mode("white", "gray.800")}
      pos="fixed"
      width="full"
      bottom="env(safe-area-inset-bottom)"
      borderTopWidth="1px"
      display={{ lg: "none" }}
      zIndex="10000"
    >
      <SimpleGrid columns={3} padding="2">
        <NavAction.Mobile {...items.cart} isActive>
          {cart.length > 0 && <CartCount right="-2">{cart.length}</CartCount>}
        </NavAction.Mobile>
        <NavAction.Mobile {...items.search} />
        <NavAction.Mobile {...items.products} />
      </SimpleGrid>
    </Box>
  );
};
