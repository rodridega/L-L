import React from "react";
import { Box, Heading, Container, Flex, Spacer, Link } from "@chakra-ui/react";
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
            <Link href={"index.html#logo"} scrollBehavior={"smooth"} textDecoration={"none"}>
              <Heading as="h1" fontFamily={"segoe"}>
                L&L
              </Heading>
            </Link>
          </Box>
          <Spacer />
        </Flex>
      </Container>
      <Cart />
    </Box>
  );
};
