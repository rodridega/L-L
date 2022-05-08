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
        borderRadius={4}
        _hover={{
          boxShadow:
            "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px orange, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);",
          
        }}
      >
        <AspectRatio ratio={1 / 1} backgroundColor={"white"}>
          <Image
            src={prod.image}
            alt={prod.title}
            key={prod.id}
            maxW="300px"
            margin={"auto"}
            objectFit={"contain"}
            p={4}
            onClick={onOpen}
            _hover={{
              cursor: "pointer",
          transition: "0.5s ease-in-out",
          transform: "scale(1.1)",
            }}
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
            mx={4}
            isTruncated
            align={{ base: "center", md: "stretch" }}
            fontSize={{base: "xs", md:"xl"}}
          >
            {prod.title}
          </Text>

          <Divider />
          <Text fontSize={{ base:"md", md: "lg"}} my={2} color="gray.500">
             ${prod.price}
          </Text>
          <Button
            fontSize={{ base: 10, md: 14 }}
            alignSelf={"center"}
            w={"80%"}
            mb={"10px !important"}
            color={"white"}
            bgColor={"orange.500"}
            _hover={{
              background: "orange.200",
              color: "black",
            }}
            onClick={() => handleProduct(prod)}
          >
            Agregar al Carrito
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent w={"90vw"}>
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
            <Text fontSize={"9px"} textAlign={"center"} fontWeight={"thin"}>Las imagenes son a modo ilustrativo</Text>
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
              <Text fontSize={{ base:"md", md: "lg"}} my={2} color="gray.800" align={"right"}>
                 ${prod.price} 
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={() => handleProduct(prod)}>
              Agregar al carrito
            </Button>
            <Button colorScheme="purple" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
