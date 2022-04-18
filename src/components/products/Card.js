import React, { useContext } from "react";
import {
  Box,
  Button,
  Image,
  Text,
  Divider,
  AspectRatio,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ShopContext } from "../../context/ShopContext";

export const Card = ({ prod }) => {
  

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleProduct } = useContext(ShopContext);

  

  return (
    <>
      <Box
        maxWidth="32rem"
        borderWidth={1}
        _hover={{
          boxShadow:
            "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px orange, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);",
          cursor: "pointer",
        }}
      >
        <AspectRatio ratio={1 / 1} backgroundColor={"white"}>
          <Image
            src={prod.image}
            alt={prod.title}
            key={prod.id}
            maxW="300px"
            margin={"auto"}
            objectFit={"contain !important"}
            p={4}
            onClick={onOpen}
          />
        </AspectRatio>
        <Stack
          textAlign={"center"}
          bgColor={"orange.100"}
          fontSize={{ base: 12, md: 18 }}
        >
          <Text
            fontWeight="500"
            lineHeight={"1.5"}
            mt={2}
            mx={8}
            isTruncated
            align={{ base: "center", md: "stretch" }}
            fontSize={"2xl"}
          >
            {prod.title}
          </Text>

          <Divider />
          <Text my={2} color="gray.500">
            Precio: ${prod.price}
          </Text>
          <Button
            fontSize={{ base: 12, md: 14 }}
            alignSelf={"center"}
            w={"80%"}
            color={"white"}
            bgColor={"orange.300"}
            _hover={{
              background: "orange.200",
              color: "black",
            }}
            onClick={() => handleProduct(prod)}
          >
            Agregar al Canasto
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={prod.image}
                alt={prod.title}
                key={prod.id}
                maxW="300px"
                margin={"auto"}
                objectFit={"contain !important"}
                p={2}
                onClick={onOpen}
              />
            </AspectRatio>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack textAlign={"center"} fontSize={{ base: 12, md: 18 }}>
              <Text
                fontWeight="600"
                lineHeight={"1.5"}
                mt={2}
                mx={8}
                fontSize={30}
                align={{ base: "center", md: "stretch" }}
              >
                {prod.title}
              </Text>

              <Text>{prod.description}</Text>
              <Divider />
              <Text my={2} color="gray.800" align={"right"}>
                Precio: ${prod.price} 
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={() => handleProduct(prod)}>
              Agregar al carrito
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};