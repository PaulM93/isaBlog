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
  Avatar,
  GridItem,
  HStack,
} from "@chakra-ui/react"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion"

export default function BigCard() {
  const [whileHover, setWhileHover] = useState<Boolean>(false)

  return (
    <motion.div
      whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
      style={{ cursor: "pointer", overflow: "hidden", height: "100%" }}
      onHoverStart={() => setWhileHover(true)}
      onHoverEnd={() => setWhileHover(false)}
    >
      <Flex
        flexDir={"column"}
        position="relative"
        maxHeight="100%"
        minHeight={"100%"}

        //   border={"1px solid black"}
      >
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -110,
            color: "black",
            background: "#EDF2F7",
            border: "1px solid black",
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            borderRadius: "5px",
          }}
          //   initial={{
          //     opacity: 0,
          //   }}
          animate={{
            // height: whileHover ? "100%" : "0%",
            color: whileHover ? "#fafafa" : "",
            opacity: whileHover ? 1 : 0,
            background: whileHover
              ? "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
              : "",
            // background: whileHover ? "red" : "",
            border: whileHover ? "1px solid #E2E8F0" : "",

            transition: { duration: 1 },
          }}
        ></motion.div>
        <Image
          boxSize={"100%"}
          src="https://images.pexels.com/photos/6489734/pexels-photo-6489734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Dan Abramov"
          objectFit="cover"
          height="400px"
        />
        <Flex p={6} flexDir="column">
          <Text mb={2} fontSize="sm" fontFamily="Lora" fontSize="sm">
            #Comida #Cultura
          </Text>
          <Heading mb={4} fontFamily={"Lora"}>
            Por que amo Mexico
          </Heading>
          <Text fontSize={"md"} mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum tempus nibh eu faucibus. Phasellus ornare nibh quis tellus
            aliquet placerat.
          </Text>
        </Flex>
        <Flex p={6} align="center">
          <Avatar
            width="40px"
            height="40px"
            src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/215991452_106042271754854_4781555572612688391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=visdt3YpbvgAX9yr68h&_nc_ht=scontent.feoh3-1.fna&oh=00_AT8evGpwNAJ_TqEKZZeVAza00sxrY5_uWwPx-h3QIO97yA&oe=62914AE2"
          />
          <Box ml={3}>
            <Text fontFamily={"Lora"} fontWeight={"700"} fontSize={"xs"}>
              Isa Arrautt
            </Text>
            <Text fontFamily={"Lora"} fontSize={"xs"}>
              12/03/22
            </Text>
          </Box>
        </Flex>
      </Flex>
    </motion.div>
  )
}
