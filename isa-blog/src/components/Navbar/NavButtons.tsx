import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { Button, HStack, Box } from "@chakra-ui/react"

export default function NavButtons() {
  //NavButtons
  const [whileHover, setWhileHover] = useState<string>("")
  const buttonArr = [
    { title: "Inicio", val: "/" },
    { title: "Sobre mí", val: "/sobremi" },
    { title: "Contáctame", val: "/contactame" },
  ]

  return (
    <HStack>
      {buttonArr.map(i => (
        <Link to={i.val}>
          <motion.div
            whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
            onHoverStart={() => setWhileHover(i.title)}
            onHoverEnd={() => setWhileHover("")}
          >
            <Box position={"relative"}>
              <Button
                size="sm"
                variant="outline"
                position={"absolute"}
                aria-label={i.title}
              >
                {i.title}
              </Button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: whileHover === i.title ? 1 : 0,
                  transition: { duration: 0.5 },
                }}
              >
                <Button
                  size="sm"
                  left={0}
                  zIndex={100}
                  colorScheme={"pink"}
                  top={0}
                  variant="outline"
                  aria-label={i.title}
                >
                  {i.title}
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Link>
      ))}
    </HStack>
  )
}
