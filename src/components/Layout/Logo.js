import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Logo = () => {
  return (
    <Flex flex={1} marginTop={{base: '4rem', md: '3rem'}}  >
        <Image
          alt={"Logo"}
          objectFit={{base:"cover"}}
          w={{ base: "100%"}}
          src="./assets/Logo.jpeg"
        />
      </Flex>
  )
}
