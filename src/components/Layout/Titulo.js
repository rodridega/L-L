import {
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

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
          Envios a domicilio sin cargo, pidiendo con 24 hs de anticipación
        </Text>
        
        <List>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            Lunes - Miercoles - Viernes
            <br />
            de 17hs en adelante
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            Sabados
            <br />
            Hasta las 13:00
          </ListItem>
        </List>
        <Divider />
        <Text fontSize={{ base: "md", lg: "xl" }} color={"gray.500"}>
          Paraná, Oro Verde, San Benito y Colonia Avellaneda
        </Text>
        <Divider />
        <Text fontSize={{ base: "md", lg: "xl" }} color={"gray.500"}>
          Hace tu compra por la Web! O contactanos al 3434466701
        </Text>
        <Stack color={"purple.800"} fontSize={{ base: "md", md: "2xl" }}>
          <Text textAlign={"center"} fontSize={"xl"}>
            METODOS DE PAGO <br />
          </Text>
          <List spacing={3} textAlign={"center"}>
            <ListItem>
              
              Efectivo
            </ListItem>
            <ListItem>
              
              Transferencia Bancaria{" "}
            </ListItem>
            <ListItem>
              
              Mercado Pago
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Flex>
  );
};
