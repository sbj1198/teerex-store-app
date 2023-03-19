import { HStack, Text, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";

export function formatPrice(value, opts = {}) {
  const { locale = "en-IN", currency = "INR" } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props) => {
  const { price, currency, rootProps, priceProps } = props;
  return (
    <HStack spacing="1" {...rootProps}>
      <Price textProps={priceProps}>{formatPrice(price, { currency })}</Price>
    </HStack>
  );
};
const Price = (props) => {
  const { children, textProps } = props;
  const defaultColor = mode("gray.700", "gray.400");
  const color = defaultColor;
  return (
    <Text as="span" fontWeight="medium" color={color} {...textProps}>
      {children}
    </Text>
  );
};
