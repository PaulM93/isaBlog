import React from "react"
import { motion } from "framer-motion"
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
  GridItem,
  HStack,
} from "@chakra-ui/react"

interface TagProps {
  whileHover: (val: boolean) => void
}

export default function Tags({ whileHover }: TagProps) {
  const tagTypes = ["Comida", "Cultura", "Viajes"]

  const tagMarkup = (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: whileHover ? 0 : 1 }}
    >
      <HStack spacing={1}>
        <Text
          fontSize={"xs"}
          fontWeight={700}
          color="blackAlpha.600"
          p={"5px"}
          borderRadius={10}
          background="linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
        >
          Comida
        </Text>
        <Text
          fontSize={"xs"}
          p={"5px"}
          fontWeight={700}
          color="blackAlpha.600"
          borderRadius={10}
          background="linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
        >
          Cultura
        </Text>
        <Text
          fontSize={"xs"}
          p={"5px"}
          fontWeight={700}
          color="blackAlpha.600"
          borderRadius={10}
          background="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);"
        >
          Viajes
        </Text>
      </HStack>
    </motion.div>
  )

  const openPost = (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: whileHover ? 1 : 0 }}
    >
      <Button size="sm" variant="outline">
        Ver mas
      </Button>
    </motion.div>
  )

  return (
    <Flex position={"relative"} width="100%" bg="green" justify={"center"}>
      {tagMarkup}
      {openPost}
    </Flex>
  )
}
