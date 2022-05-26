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
  IconButton,
  GridItem,
  HStack,
  Link,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FiHeart, FiShare2 } from "react-icons/fi"

export default function SocialIcons() {
  const iconArr = [
    { name: "Like", icon: <FiHeart />, url: "" },
    { name: "Share", icon: <FiShare2 />, url: "" },
  ]

  const iconMarkup = iconArr.map(i => (
    <motion.button
      whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
    >
      <Link isExternal href={i.url}>
        <IconButton
          size={"md"}
          variant="ghost"
          colorScheme={"pink"}
          aria-label={i.name}
          icon={i.icon}
        />
      </Link>
    </motion.button>
  ))

  return (
    <Flex flexDir={"column"} alignItems="center">
      <HStack>{iconMarkup}</HStack>
    </Flex>
  )
}
