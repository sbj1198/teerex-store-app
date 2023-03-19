import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Text,
  Link,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import * as React from "react";
const MobileNavAction = (props) => {
  const { label, icon, isActive, href, children } = props;
  return (
    <Center
      as={label !== "Cart" && "a"}
      href={label !== "Cart" ? href : undefined}
      height="56px"
      rounded="4"
      aria-current={isActive ? "page" : undefined}
      _activeLink={{ color: mode("blue.500", "blue.300") }}
      _hover={{ bg: mode("gray.100", "gray.700") }}
    >
      <Link as={RouteLink} to="/cart">
        <Flex position="relative" direction="column" align="center" as="button">
          <Box fontSize="xl" as={icon} />
          <Text fontSize="sm" fontWeight="medium">
            {label}
          </Text>
          {children}
        </Flex>
      </Link>
    </Center>
  );
};
const DesktopNavAction = (props) => {
  const { label, icon } = props;
  return (
    <HStack spacing="2">
      <Text fontSize="sm" fontWeight="semibold">
        {label}
      </Text>
      <Icon as={icon} />
    </HStack>
  );
};
export const NavAction = {
  Mobile: MobileNavAction,
  Desktop: DesktopNavAction,
};
