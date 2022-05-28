import React, { useState } from "react"
import { Flex, Heading, Icon, IconButton } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
// import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons"

export default function MotionHeader() {
  const [whileHover, setWhileHover] = useState<string>("")
  const [icon, setIcon] = useState("")

  const buttonArr = [
    { title: "viajes,", val: "" },
    { title: "comida, ", val: "" },
    { title: "libros...", val: "" },
  ]

  console.log("Icon", icon)

  const buttonMarkup = buttonArr.map(i => (
    <motion.button
      onClick={() => setIcon(i.title)}
      whileHover={{ scale: 1.01, y: -5, transition: { duration: 0.2 } }}
      onHoverStart={() => setWhileHover(i.title)}
      onHoverEnd={() => setWhileHover("")}
      style={{
        display: "inline",
        position: "relative",
      }}
    >
      <Heading
        size="lg"
        fontFamily="lora"
        mr={2}
        bgClip="text"
        bgGradient={
          whileHover === i.title
            ? "linear(to-l, #0865AF,  #7B0E5B)"
            : "linear(to-l, #000000, #000000)"
        }
      >
        {i.title}
      </Heading>
      {/* when we click or hover an emoticon flies on page */}
    </motion.button>
  ))

  return (
    <Flex
      w={["90%", "90%", "95%", "75%"]}
      justify="space-between"
      mb={14}
      align="center"
    >
      <Flex position={"relative"} align="center">
        <IconButton
          position={"absolute"}
          aria-label="Go back"
          zIndex={50}
          variant="outline"
          icon={<Icon as={FiArrowLeft} />}
        />
        <motion.div
          whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
          style={{ position: "absolute", zIndex: 100 }}
          initial={{ opacity: 0 }}
        >
          <IconButton
            colorScheme={"pink"}
            aria-label="Go back"
            variant="outline"
            icon={<Icon as={FiArrowLeft} />}
          />
        </motion.div>
      </Flex>

      <Heading size="lg" fontFamily={"Lora"}>
        Un blog de {buttonMarkup}
      </Heading>
      <IconButton
        aria-label="Go forward"
        variant="outline"
        icon={<Icon as={FiArrowRight} />}
      />
    </Flex>
  )
}
