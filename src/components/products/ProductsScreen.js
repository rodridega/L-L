import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useContext } from "react";

import { ShopContext } from "../../context/ShopContext";
import { Card } from "./Card";

export const ProductsScreen = () => {
  const { cards, loading } = useContext(ShopContext);

  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="pink.500"
          size="xl"
          display={"flex"}
          mx={"auto"}
          my={"20"}
        />
      ) : (
        <Box maxW="90rem" margin={4}>
          <Heading
            as="h2"
            py={28}
            pb={8}
            fontSize={{ base: "4xl", md: "6xl" }}
            textAlign="center"
            color={"purple.800"}
          >
            Productos
          </Heading>

          <SimpleGrid columns={[2, 2, 2, 2, 3]} spacing={"10"}>
            {cards.map((prod) => {
              return <Card prod={prod} key={prod.id} />;
            })}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};
