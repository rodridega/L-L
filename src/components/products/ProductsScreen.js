import { Box, Heading, Input, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useContext } from "react";

import { ShopContext } from "../../context/ShopContext";
import { useForm } from "../../hooks/useForm";
import { Card } from "./Card";

export const ProductsScreen = () => {
  const { cards, loading } = useContext(ShopContext);

  const [formValues, handleInputChange] = useForm({
    search: "",
  });
  const { search } = formValues;

  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
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
            fontFamily="segoe"
          >
            Productos
          </Heading>
          <Box
            margin={4}
            padding={4}
            borderRadius={"xl"}
            border={"2px"}
            borderColor={"purple.300"}
          >
            <form>
              <Input
                type={"search"}
                value={search}
                placeholder={"Ej: Jabon"}
                border={"2px"}
                name={"search"}
                onChange={handleInputChange}
              />
            </form>
          </Box>

          <SimpleGrid columns={[2, 2, 2, 2, 3]} spacing={"10"}>
            {cards
              .filter((card) => {
                return card?.title
                  .toLowerCase()
                  .includes((search || "").toLowerCase());
              })
              .map((prod, index) => {
                return <Card prod={prod} key={index} />;
              })}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};
