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
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ProductoCarrito } from "./ProductoCarrito";
import { ShopContext } from "../../context/ShopContext";
import Swal from "sweetalert2";

export const Cart = () => {
  const { prodCarrito, setProdCarrito } = useContext(ShopContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let total = 0;

  const vaciarCarrito = () => {
    onClose();
    Swal.fire({
      title: "Estas seguro que queres vaciar el canasto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si vacialo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Vaciado!", "Has vaciado el canasto", "success");
        setProdCarrito([]);
      }
    });
  };

  return (
    <>
      <Text fontSize={"2xl"} mr={4}>
        Carrito
      </Text>
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
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} fontSize={{ base: "12", md: "md" }}>Tu Canasto</DrawerHeader>

          <DrawerBody padding={0}>
            <Table variant="simple" >
              <Thead >
                <Tr >
                  <Th fontSize={{ base: "8", md: "md" }}>Imagen</Th>
                  <Th padding={2} fontSize={{ base: "8", md: "md" }}>Nombre</Th>
                  <Th padding={2} fontSize={{ base: "8", md: "md" }}>
                    Precio
                  </Th>
                  <Th padding={2} fontSize={{ base: "8", md: "md" }}>
                    Cantidad
                  </Th>
                  <Th padding={2} fontSize={{ base: "8", md: "md" }}>X</Th>
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
                    <Th colSpan={2} fontSize={{base: 'xs', md:'2xl'}}>TOTAL</Th>
                    <Th fontSize={{base: 'xs', md:'2xl'}}>${total.toFixed(2)} </Th>
                  </Tr>
                </Tfoot>
              )}
            </Table>
          </DrawerBody>
          {total !== 0 && (
            <DrawerFooter>
              <Link
                href={`https://wa.me/5493434466701?text=Hola!%20Quiero%20comprar%20estos%20productos%20:%0A${prodCarrito
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
          )}
          
        </DrawerContent>
      </Drawer>
    </>
  );
};
