import {
  Box,
  Center,
  Flex,
  Link,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
  Img,
} from "@chakra-ui/react";
import * as React from "react";
import { BsBox } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartCount } from "./CartCount";
import { MobileBottomNav } from "./MobileBottomNav";
import { NavAction } from "./NavAction";
import { SearchInput } from "./SearchInput";
import { Link as RouteLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/TeeRexStore.png";
export const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <>
      <Flex
        direction="column"
        pb="4.5rem"
        overflow="hidden"
        display={{ base: "flex", lg: "none" }}
      >
        <Box px="4" py="4" borderBottomWidth="1px" overflow="auto">
          <Flex
            align="center"
            justify="space-between"
            mb="3"
            display={{ base: "flex", lg: "none" }}
          >
            <HStack spacing="3">
              <Center w="8" h="8" as="button" type="button">
                <VisuallyHidden>Toggle Menu</VisuallyHidden>
                <Box as={MdMenu} fontSize="3xl" />
              </Center>
              <Img src={logo} h="30px" w="150px" />
            </HStack>
          </Flex>
          <SearchInput />
        </Box>

        <MobileBottomNav />
      </Flex>

      <Box
        position="sticky"
        top="0"
        zIndex="10000"
        display={{ base: "none", lg: "block" }}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
      >
        <Box px="8" bg={mode("white", "gray.800")}>
          <Flex height="4.5rem" align="center" maxW="8xl" mx="auto">
            {/* <HStack flex="24rem" spacing="32px"> */}
            <HStack flex="12rem" spacing="32px">
              <Link as={RouteLink} to="/">
                <Img src={logo} h="30px" w="300px" />
              </Link>
            </HStack>
            <Box width="full" mx="8">
              <SearchInput />
            </Box>
            <HStack spacing="12" flexShrink={0}>
              <Link to="/" as={RouteLink} _hover={{ textDecoration: "none" }}>
                <NavAction.Desktop label="Products" icon={BsBox} />
              </Link>
              <Link
                to="/cart"
                as={RouteLink}
                _hover={{ textDecoration: "none" }}
              >
                <Box position="relative">
                  <NavAction.Desktop label="Cart" icon={RiShoppingCartLine} />
                  {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
                </Box>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
