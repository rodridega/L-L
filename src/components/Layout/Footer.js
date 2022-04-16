import { ButtonGroup, Box, IconButton, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
      >
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.instagram.com/ll.prodlimpieza/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
              target={"_blank"}
              color="white"
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/profile.php?id=100076926638680"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="1.25rem" />}
              target={"_blank"}
              color="white"
            />
            
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="white" textAlign={"center"}>
          &copy; {new Date().getFullYear()} L&L - Productos de Limpieza
        </Text>
      </Stack>
    </Box>
  );
};
