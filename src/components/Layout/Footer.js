import {
  ButtonGroup,
  Box,
  IconButton,
  Stack,
  Text,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

export const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={{
        base: "12",
        md: "16",
      }}
      bgColor={"purple.700"}
      
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
        direction={{base:"column" , md: "row"}}
        justify={"space-evenly"}
        align={"center"}
      >
        <Stack color={'white'} fontSize={{base: 'md' ,md:'2xl'}}>
          <Text >
            METODOS DE PAGO <br />
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="orange.500" />
              Efectivo
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="orange.500" />
              Transferencia Bancaria{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="orange.500" />
              Mercado Pago
            </ListItem>
          </List>
        </Stack>
        <Stack justify="center" direction="column" align="center">
          <Text color={'white'} fontSize={{base: 'sm', md:'2xl'}} mt={4}>Nuestras Redes Sociales</Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.instagram.com/ll.prodlimpieza/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="2.25rem" />}
              target={"_blank"}
              color="white"
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/profile.php?id=100076926638680"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="2.25rem" />}
              target={"_blank"}
              color="white"
            />
          </ButtonGroup>
        </Stack>
      </Stack>
      <Text fontSize="sm" color="white" textAlign={"center"} mt={"14"}>
        &copy; {new Date().getFullYear()} Deganutti Rodrigo - Todos los derechos
        reservados
      </Text>
    </Box>
  );
};
