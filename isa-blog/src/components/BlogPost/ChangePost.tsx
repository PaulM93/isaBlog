import React, { useState } from "react"
import { Flex, Text, Icon, IconButton } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"

interface ChangePostProps {
  side: boolean
  url: string
  displayButton: boolean
}

export default function ChangePost({
  side,
  url,
  displayButton,
}: ChangePostProps) {
  const [whileHover, setWhileHover] = useState<Boolean>(false)

  return (
    <Flex
      display={displayButton ? "flex" : "none"}
      ml={4}
      m={4}
      top="50%"
      h="fit-content"
      align="center"
      justify="center"
      flexDir={"column"}
      position={"sticky"}
      alignItems="center"
    >
      <motion.div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "1em",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: whileHover ? 1 : 0, transition: { duration: 0.5 } }}
      >
        <Text
          fontFamily={"Lora"}
          mb={5}
          fontSize="md"
          textAlign={side ? "left" : "right"}
        >
          {side ? "Próxima publicación" : "Ultima publicación"}
        </Text>
      </motion.div>
      <motion.button
        style={{ position: "relative" }}
        onHoverStart={() => setWhileHover(true)}
        onHoverEnd={() => setWhileHover(false)}
      >
        <Flex
          position={"relative"}
          align="center"
          width={"100%"}
          justify="center"
        >
          <IconButton
            position={"absolute"}
            aria-label="Go back"
            zIndex={50}
            variant="outline"
            icon={<Icon as={side ? FiArrowRight : FiArrowLeft} />}
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
              icon={<Icon as={side ? FiArrowRight : FiArrowLeft} />}
            />
          </motion.div>
        </Flex>
      </motion.button>
    </Flex>
  )
}
