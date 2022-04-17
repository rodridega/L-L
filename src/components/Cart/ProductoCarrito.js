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
      <Tbody key={id} fontSize={'xl'}>
        <Tr>
          <Td>
            <Image src={image} />
          </Td>
          <Td>{title}</Td>
          <Td isNumeric>{price}</Td>
          <Td isNumeric>{cantidad}</Td>
          <Td>
            <Button
              bgColor={"pink.300"}
              _hover={{
                bgColor: "pink.400",
              }}
              onClick={quitarProducto}
            >
              X
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};
