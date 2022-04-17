import React, { useContext, useState } from "react";
import { Box, IconButton, useBreakpointValue, Text } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { ShopContext } from "../../context/ShopContext";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(Slider | null);
  const { carousel } = useContext(ShopContext);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide

  return (
    <Box
      position={"relative"}
      height={{ base: "600px", md: "700px", lg: "800px" }}
      width={{ base: "400px", md: "600px", lg: "450px", xl: "600px" }}
      margin={"0 auto"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Text
        align={"center"}
        fontSize={"4xl"}
        m={4}
        color={"purple.700"}
        fontWeight={"semibold"}
      >
        Ofertas
      </Text>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="purple"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="purple"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {carousel.map(({ imagen, id }) => {
          if (imagen !== null) {
            return (
              <Box
                key={id}
                position={"relative"}
                height={"600px"}
                width={"100%"}
                backgroundImage={`url(${imagen})`}
                backgroundSize={"contain"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
              />
            )
          } else{
            return
          }
        })}
      </Slider>
    </Box>
  );
};
