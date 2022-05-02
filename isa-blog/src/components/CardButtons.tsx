import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link, navigate } from "gatsby"
//
import {
  Container,
  Image,
  Button,
  Grid,
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Avatar,
  GridItem,
  IconButton,
  HStack,
} from "@chakra-ui/react"
import { FiHome, FiArrowLeft, FiArrowRight } from "react-icons/fi"

export default function CardButtons() {
  const filterButtonArr: string[] = ["Comida", "Libros", "Viajes"]
  const buttonArr: string[] = ["Sobre mi", "Subscribete"]

  const [selected, setSelected] = useState("")

  const filterButtonnMarkup = filterButtonArr.map(i => (
    <motion.button
      onClick={() => setSelected(i)}
      style={{
        padding: "2px 4px 2px 4px",
        fontFamily: "Nunito",
        fontSize: "12px",
        fontWeight: "700",
        color: selected === i ? "#fafafa" : "#B83280",
        borderRadius: "3px",
        border: "1px solid #B83280",
        background: selected === i ? "#B83280" : "none",
      }}
      whileHover={{
        borderRadius: "8px",
        transition: {
          duration: 0.5,
        },
      }}
    >
      {i}
    </motion.button>
  ))

  const righSideButtons = buttonArr.map(i => (
    <Link to={"/about"}>
      <motion.button
        onClick={() => setSelected(i)}
        style={{
          padding: "2px 4px 2px 4px",
          fontFamily: "Nunito",
          fontSize: "12px",
          fontWeight: "700",
          borderRadius: "3px",
          color: "#fafafa",
          background: "#B83280",
          border: "1px solid #B83280",
        }}
        whileHover={{
          borderRadius: "6px",
          transition: {
            duration: 0.5,
          },
        }}
      >
        {i}
      </motion.button>
    </Link>
  ))

  return (
    <Flex w="100%" justify={"space-between"} mb={2}>
      <Flex align="flex-end">
        <Link to="/" p={0} m={0}>
          <IconButton
            mr={1}
            size="xs"
            variant="outline"
            borderRadius={"3px"}
            colorScheme={"pink"}
            icon={<FiHome />}
          />
        </Link>
        <HStack spacing={1}>{filterButtonnMarkup}</HStack>
      </Flex>
      <HStack spacing={1}>
        {righSideButtons}
        <IconButton
          onClick={() => navigate(-1)}
          size="xs"
          borderRadius={"3px"}
          variant="outline"
          colorScheme="pink"
          aria-label="Go back"
          icon={<FiArrowLeft />}
        />
        <IconButton
          onClick={() => navigate(+1)}
          size="xs"
          borderRadius={"3px"}
          variant="outline"
          colorScheme="pink"
          aria-label="Go Forward"
          icon={<FiArrowRight />}
        />
      </HStack>
    </Flex>
  )
}
