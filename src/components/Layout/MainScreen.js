import React from "react";
import { Footer } from "./Footer";

import { ProductsScreen } from "../products/ProductsScreen";
import { Box, Grid } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Titulo } from "./Titulo";
import { Carousel } from "../products/Carousel";

export const MainScreen = () => {
  return (
    <div className="main">
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}>
        <Box>
          <Logo />
          <Titulo />
          <Carousel />
        </Box>

        <ProductsScreen  />
      </Grid>

      <Footer />
    </div>
  );
};
