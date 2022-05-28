import React from "react"
import SocialButtons from "./Navbar/SocialIcons"
import {
  Box,
  Flex,
  Divider,
  Text,
  VStack,
  IconButton,
  Link,
  Center,
} from "@chakra-ui/react"
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const socialIcons = [
    {
      name: "facebook",
      val: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      name: "github",
      val: "https://github.com/",
      icon: <FaGithub />,
    },
    {
      name: "instagram",
      val: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
  ]
  const socialMarkup = socialIcons.map(i => (
    <Link color={"secondary"} href={i.val} isExternal>
      <IconButton aria-label={i.name} icon={i.icon} isRound />
    </Link>
  ))

  return (
    <>
      <Flex flexDir={"column"} width="100%" align={"center"} bg="#F3F5F7">
        <Divider borderColor={"blackAlpha.300"} width="75%" />
        <Box pb={12} pt={12} w={["85%", "100%"]}>
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            position={"relative"}
            bottom={"0px"}
            left="0px"
            pt={5}
            right="0px"
          >
            <VStack spacing={5}>
              <Text
                fontSize={"lg"}
                color="secondary"
                fontWeight="700"
                fontFamily={"Lora"}
                textAlign={"center"}
              >
                Leyendo, viajando y soñando <br /> dia por dia.
              </Text>
              <SocialButtons />
              <Text color="primaryMute" fontSize={"sm"}>
                Handcrafted by me
              </Text>
              <Text color="primary" fontSize={"xs"}>
                Made with Chakra UI
              </Text>
            </VStack>
          </Flex>
        </Box>
        <Box
          height="10px"
          width="100%"
          backgroundSize="cover"
          backgroundPosition="top"
          backgroundImage='url("https://images.pexels.com/photos/7120362/pexels-photo-7120362.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        />
      </Flex>
    </>
  )
}
