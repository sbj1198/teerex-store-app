import { Box } from "@chakra-ui/react";
import * as React from "react";
import { ProductGrid } from "./ProductGrid";
import { ProductCard } from "./ProductCard";

export const Products = ({ tshirts }) => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {tshirts.map((tshirt) => (
          <ProductCard key={tshirt.id} product={tshirt} />
        ))}
      </ProductGrid>
    </Box>
  );
};
