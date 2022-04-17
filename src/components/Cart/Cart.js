import React, { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Table,
  Thead,
  Th,
  Tr,
  Tfoot,
  Badge,
  Button,
  Link,
  useDisclosure
} from "@chakra-ui/react";
import { ProductoCarrito } from "./ProductoCarrito";
import { ShopContext } from "../../context/ShopContext";

export const Cart = () => {
  const { prodCarrito, setProdCarrito } = useContext(ShopContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let total = 0;

  const vaciarCarrito = () => {
    let seguro = window.confirm("Esta seguro que quiere vaciar el carrito?");
    seguro && setProdCarrito([]);
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bgColor={"orange.500"}
        _hover={{
          bgColor: "orange.100",
          color: "orange.600",
          border: "orange.700",
        }}
      >
        <FontAwesomeIcon icon={faBasketShopping} fontSize={30} />
      </Button>
      <Badge
        color={"orange.500"}
        bgColor={"orange.100"}
        fontSize={18}
        px={2}
        borderRadius={"full"}
        alignSelf={"end"}
        position={"relative"}
        right={"11px"}
        bottom={"-11px"}
      >
        {prodCarrito.reduce((acc, prod) => prod.cantidad + acc, 0)}{" "}
      </Badge>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"}>Tu Canasto</DrawerHeader>

          <DrawerBody>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th fontSize={{ base: "xs", md: "md" }}>Imagen</Th>
                  <Th fontSize={{ base: "xs", md: "md" }}>Nombre</Th>
                  <Th isNumeric fontSize={{ base: "xs", md: "md" }}>
                    Precio
                  </Th>
                  <Th isNumeric fontSize={{ base: "xs", md: "md" }}>
                    Cantidad
                  </Th>
                </Tr>
              </Thead>
              {prodCarrito.map(({ image, price, title, id, cantidad }) => {
                total += price;
                return (
                  <ProductoCarrito
                    image={image}
                    price={price}
                    title={title}
                    key={id}
                    cantidad={cantidad}
                    prodCarrito={prodCarrito}
                    setProdCarrito={setProdCarrito}
                  />
                );
              })}
              {total !== 0 && (
                <Tfoot>
                  <Tr>
                    <Th colSpan={2}>TOTAL</Th>
                    <Th isNumeric>{total.toFixed(2)} </Th>
                  </Tr>
                </Tfoot>
              )}
            </Table>
          </DrawerBody>

          <DrawerFooter>
            <Link
              href={`https://wa.me/5493434682124?text=Hola!%20Quiero%20comprar%20estos%20productos%20:%0A${prodCarrito
                .map((prod) => `${prod.title} x ${prod.cantidad}%0A`)
                .join("")}%0ATotal:%20${total}$`}
              target={"_blank"}
            >
              <Button mr={3} bgColor={"green.400"}>
                Comprar
              </Button>
            </Link>

            <Button bgColor={"red.400"} onClick={vaciarCarrito}>
              Vaciar carrito
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
