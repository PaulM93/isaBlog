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
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi"

export default function SocialIcons() {
  const iconArr = [
    { name: "Instagram", icon: <FiTwitter />, url: "" },
    { name: "Instagram", icon: <FiInstagram />, url: "" },
    { name: "Facebook", icon: <FiFacebook />, url: "" },
  ]
  const iconMarkup = iconArr.map(i => (
    <Link isExternal href={i.url}>
      <IconButton
        size={"md"}
        variant="ghost"
        colorScheme={"pink"}
        aria-label={i.name}
        icon={i.icon}
      />
    </Link>
  ))

  return (
    <>
      <Flex flexDir={"column"} alignItems="center">
        <HStack>{iconMarkup}</HStack>
        {/* <Text fontSize="xs" fontFamily={"lora"}>
          Encuentrame
        </Text> */}
      </Flex>
    </>
  )
}
