import React from "react";
import { Box, Heading, Container, Flex, Spacer } from "@chakra-ui/react";
import { Cart } from "../Cart/Cart";



export const MyMenu = () => {

  
  return (
    <Box
      bg={"purple.700"}
      w="100%"
      p={4}
      color="white"
      position={"fixed"}
      zIndex={"banner"}
      display={"flex"}
    >
      <Container maxW="container.xl">
        <Flex>
          <Box>
            <Heading as="h1" fontFamily={'segoe'}>L&L</Heading>
          </Box>
          <Spacer />
        </Flex>
      </Container>
      <Cart />
    </Box>
  );
};
