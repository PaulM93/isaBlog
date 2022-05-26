import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
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
//Component
import Tags from "./Tags"

export default function SmallCard({}: SmallCardProps) {
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
    <Link to="/blog">
      <motion.div
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 },
          boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
        }}
        style={{
          // minHeight: "100%",
          cursor: "pointer",
          borderRadius: "10px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "15px",
        }}
        onHoverStart={() => setWhileHover(true)}
        onHoverEnd={() => setWhileHover(false)}
      >
        <Avatar
          borderRadius={"10px"}
          boxSize={"100%"}
          height={"260px"}
          src={"src"}
          alt={"title"}
          objectFit="cover"
        />
        <Flex p={4} flexDir="column" align={"center"} minH="100px">
          <Heading
            bgGradient={
              whileHover
                ? "linear(to-l, #0865AF,  #7B0E5B)"
                : "linear(to-l, #000000, #000000)"
            }
            bgClip="text"
            mb={3}
            size="md"
            fontFamily={"Lora"}
          >
            About me
          </Heading>

          <Tags whileHover={whileHover} />
        </Flex>
      </motion.div>
    </Link>
  )
}
