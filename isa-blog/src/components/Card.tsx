import React from "react"
import {
  Container,
  Image,
  Button,
  Grid,
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  Icon,
  GridItem,
  HStack,
} from "@chakra-ui/react"
import { FiClock } from "react-icons/fi"

export default function Card() {
  const readTime = (
    <Flex align="center">
      <Icon as={FiClock} fontSize="xs" />
      <Text fontSize={"xs"} ml={1}>
        5 min read
      </Text>
    </Flex>
  )

  const hashTagArr = ["Comida", "Mexico", "CDMX"]
  const hashTags = (
    <Box>
      <HStack>
        {hashTagArr.map(i => (
          <Text fontFamily={"lora"} fontSize="sm">
            #{i}
          </Text>
        ))}
      </HStack>
    </Box>
  )

  return (
    <Flex
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      bg="white"
      borderRadius={5}
      h="400px"
      flexDir="column"
      minWidth="100%"
    >
      <Box w="100%">
        <Image
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          h="200px"
          objectFit="cover"
          w="100%"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Box>
      <Flex p={5} flexDir="column" height="100%" justify="space-between">
        <Box>
          <Flex align="center">
            <Avatar size="sm" src="https://bit.ly/kent-c-dodds" />
            <Box ml={2}>
              <Text fontFamily={"Lora"} fontWeight="700" fontSize={"xs"}>
                Paul Marley
              </Text>
              <Text
                fontFamily={"Lora"}
                fontSize={"xs"}
                textTransform="capitalize"
              >
                Mar 27 2022
              </Text>
            </Box>
          </Flex>
          <Box mt={4}>
            <Heading fontFamily={"Nunito"} fontWeight="900" size="md" m={0}>
              Que tome en la CDMX?
            </Heading>
            {readTime}
          </Box>
        </Box>
        {/* Hashtags  */}
        {hashTags}
      </Flex>
    </Flex>
  )
}
