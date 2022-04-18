import React from "react";
import { Image, Tbody, Tr, Td, Button } from "@chakra-ui/react";

export const ProductoCarrito = ({
  image,
  price,
  title,
  id,
  cantidad,
  prodCarrito,
  setProdCarrito,
}) => {
  const quitarProducto = () => {
    const copiaCarrito = [...prodCarrito];
    prodCarrito = copiaCarrito.filter((prod) => title !== prod.title);

    setProdCarrito(prodCarrito);
  };

  return (
    <>
      <Tbody key={id} fontSize={{base: '10' , md: 'xl'}}>
        <Tr >
          <Td >
            <Image src={image} />
          </Td>
          <Td>{title}</Td>
          <Td >${price}</Td>
          <Td >x{cantidad}</Td>
          <Td padding={0} paddingRight={2}>
            <Button
              bgColor={"purple.300"}
              _hover={{
                bgColor: "purple.400",
              }}
              onClick={quitarProducto}
              size={"xs"}
              
            >
              X
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};
