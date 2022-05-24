import React, { useState } from "react"
import { motion } from "framer-motion"
import SocialIcons from "../SocialIcons"
import {
  Container,
  Image,
  Button,
  Grid,
  Box,
  Flex,
  Heading,
  Center,
  Text,
  Avatar,
  GridItem,
  HStack,
} from "@chakra-ui/react"

export default function Navbar() {
  const buttonArr = [
    { title: "Inicio", val: "" },
    { title: "Sobre mí", val: "" },
    { title: "Contáctame", val: "" },
  ]

  const [whileHover, setWhileHover] = useState<string>("")

  return (
    <Flex h="100px" justify={"center"} w="100%">
      <Box width="100%" height="75vh" position="absolute">
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            background: "#F8F4F0",
          }}
        />
      </Box>
      <Flex
        // position="relative"
        h="100%"
        justify={"space-between"}
        align="center"
        w="75%"
      >
        <Heading size="md">Un Cafe con Isa</Heading>
        <HStack spacing={5}>
          {buttonArr.map(i => (
            <motion.div
              whileHover={{
                scale: 1.01,
                y: -2,
                transition: {
                  duration: 0.2,
                },
              }}
              style={{ position: "relative", cursor: "pointer" }}
              onHoverStart={() => setWhileHover(i.title)}
              onHoverEnd={() => setWhileHover("")}
            >
              <Heading
                mb={1}
                size="sm"
                color="bl"
                // bgGradient={
                //   whileHover === i.title
                //     ? "linear(to-l, #7928CA, #FF0080)"
                //     : "linear(to-l, #000000, #000000)"
                // }
                // bgClip="text"
              >
                {i.title}
              </Heading>
              <motion.div
                style={{
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  //   background: "rgb(255,0,128)",
                  background: "#CA629D",
                  // "linear-gradient(90deg, rgba(255,0,128,1) 0%, rgba(121,40,202,1) 100%)",
                }}
                animate={{
                  width: whileHover === i.title ? "100%" : "0%",
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          ))}
        </HStack>
        <SocialIcons />
      </Flex>
    </Flex>
  )
}
