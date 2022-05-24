import React, { useState } from "react"
import {
  Container,
  Image,
  Button,
  Grid,
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Avatar,
  Center,
  GridItem,
  HStack,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Banner() {
  const [whileHover, setWhileHover] = useState<Boolean>(false)
  return (
    <>
      <Center w="100%">
        <motion.div
          whileHover={{
            cursor: "pointer",
            scale: 1.01,
          }}
          style={{
            position: "relative",
            width: "75%",
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
          }}
          onHoverStart={() => setWhileHover(true)}
          onHoverEnd={() => setWhileHover(false)}
        >
          <Box
            position={"absolute"}
            width="100%"
            height="100%"
            zIndex={300}
            boxShadow={whileHover ? "rgba(0, 0, 0, 0.09) 0px 3px 12px" : ""}
            borderRadius={"5px"}
            bg="blackAlpha.300"
          />
          <motion.div
            style={{
              position: "absolute",
              height: "200px",
              width: "100%",
              borderRadius: "5px",
              backgroundSize: "cover",
              backgroundPosition: "top",
              zIndex: 200,
              opacity: 0,
              backgroundImage:
                'url("https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
            }}
            animate={{
              border: whileHover ? "1px solid #E2E8F0" : "",
              boxShadow: whileHover ? "rgba(0, 0, 0, 0.09) 0px 3px 12px" : "",
              opacity: whileHover ? 1 : 0,
              transition: { duration: 1 },
            }}
          />
          <Box
            position={"absolute"}
            zIndex="100"
            borderRadius={"5px"}
            width={"100%"}
            height="100%"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage={
              'url("https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
            }
          />
          <Flex
            position={"relative"}
            zIndex="500"
            w="100%"
            h="200px"
            borderRadius="5px"
            p={10}
            align={"center"}
          >
            <Flex
              w="100%"
              position={"relative"}
              h="120px"
              justify={"space-between"}
              align="flex-end"
            >
              <Heading size="lg" zIndex={200}>
                <span
                  style={{
                    fontFamily: "nunito",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Sign Up for
                </span>{" "}
                <br />{" "}
                <span style={{ fontFamily: "Lora", color: "white" }}>
                  my newsletter{" "}
                </span>
              </Heading>
              <Flex align="flex-end">
                <Flex mr={2}>
                  <Input
                    focusBorderColor="pink.400"
                    bg="white"
                    size="md"
                    placeholder="Nombre"
                    mr={2}
                  />
                  <Input
                    focusBorderColor="pink.400"
                    bg="white"
                    size="md"
                    placeholder="Correo electrónico"
                  />
                </Flex>
                <Button colorScheme={"pink"} size="md" variant={"solid"}>
                  Subscribe
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
      </Center>
    </>
  )
}
