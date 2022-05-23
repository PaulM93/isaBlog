import React, { useState, useEffect } from "react"
import { container, hiddenContainer } from "./Navbar.module.css"
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
import { transform } from "framer-motion"
import SocialIcons from "../SocialIcons"

// interface NavbarProps {
//   positionPercentage: string
// }

export default function Navbar({ shouldShowActions }) {
  // export default function Navbar({ positionPercentage }: NavbarProps) {
  return (
    <motion.div
      className={container}
      initial={{
        opacity: 1,
        borderBottom: "none",
        height: "80px",
        y: "-80px",
      }}
      animate={{
        // opacity: shouldShowActions ? 1 : 0,
        y: shouldShowActions ? 0 : "-80px",
        // height: shouldShowActions ? "80px" : "0px",
      }}
      transition={{ duration: 0.5 }}
    >
      <Flex w="75%" justify="space-between" alignItems={"center"}>
        <Heading size="md">Un Cafe con Isa</Heading>
        <HStack>
          <Button>Comida</Button>
          <Button>Viajes</Button>
          <Button>Libros</Button>
        </HStack>
        <SocialIcons />
      </Flex>
    </motion.div>
  )
}
