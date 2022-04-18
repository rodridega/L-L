import {
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export const Titulo = () => {
  return (
    <Flex p={8} flex={1} align={"center"} justify={"center"}>
      <Stack spacing={6} w={"full"} maxW={"lg"}>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: useBreakpointValue({ base: "20%", md: "30%" }),
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "pink.300",
              zIndex: -1,
            }}
          >
            L&L
          </Text>
          <br /> <Text as={"span"}>Productos de Limpieza</Text>{" "}
        </Heading>
        <Text fontSize={{ base: "md", lg: "2xl" }} color={"gray.500"}>
          Envios a domicilio
        </Text>
        <Divider />
        <Text fontSize={{ base: "md", lg: "xl" }} color={"gray.500"}>
          Paraná, Oro Verde, San Benito y Colonia Avellaneda
        </Text>
      </Stack>
    </Flex>
  );
};
