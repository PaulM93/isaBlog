import React, { useState, useEffect } from "react"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion"
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

interface SmallCardProps {
  src: string
  title: string
  hashtags: []
}

export default function SmallCard({ src, title, hashtags }: SmallCardProps) {
  const [whileHover, setWhileHover] = useState<Boolean>(false)

  const gradients: [] = [
    "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
    // "linear-gradient(to left, #11998e, #38ef7d)",
    // "linear-gradient(to left, #8e2de2, #4a00e0)",
    // "linear-gradient(to left, #ff0084, #33001b)",
  ]

  //   const [gradient, setGradient] = useState("")

  //   useEffect(() => {
  //     setGradient(gradients[Math.floor(Math.random() * gradients.length)])
  //   }, [whileHover === true])

  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      style={{ cursor: "pointer" }}
      onHoverStart={() => setWhileHover(true)}
      onHoverEnd={() => setWhileHover(false)}
    >
      <Flex flexDir={"column"} position="relative">
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "0%",
            zIndex: -110,
            color: "black",
            borderRadius: "5px",
            // background: gradient,
          }}
          animate={{
            height: whileHover ? "100%" : "0%",
            // color: whileHover ? "#fafafa" : "",
            border: whileHover ? "1px solid #E2E8F0" : "",
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            transition: { duration: 0.2 },
          }}
        ></motion.div>
        <Image
          boxSize={"100%"}
          height={"250px"}
          src={src}
          alt={title}
          objectFit="cover"
        />
        <Flex p={4} flexDir="column">
          <Heading
            bgGradient={
              whileHover
                ? "linear(to-l, #7928CA, #FF0080)"
                : "linear(to-l, #000000, #000000)"
            }
            bgClip="text"
            mb={3}
            size="md"
            fontFamily={"Lora"}
          >
            {title}
          </Heading>
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
              background="linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
            >
              Cultura
            </Text>
          </HStack>
        </Flex>
      </Flex>
    </motion.div>
  )
}
