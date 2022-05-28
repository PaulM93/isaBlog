import React, { useState } from "react"
import { Button, Box, Flex, Heading, Input, Center } from "@chakra-ui/react"
import { motion } from "framer-motion"
import MotionWrapper from "./MotionComponents/MotionWrapper"

export default function Banner() {
  const [whileHover, setWhileHover] = useState<Boolean>(false)

  // https://images.pexels.com/photos/7120362/pexels-photo-7120362.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  // https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
  return (
    <>
      <MotionWrapper>
        <Center w="100%">
          <Box w={"100%"}>
            <motion.div
              whileHover={{
                cursor: "pointer",
                scale: 1.01,
              }}
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
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
                background="blackAlpha.400"
                backdropContrast="10"
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
                    'url("https://images.pexels.com/photos/7120362/pexels-photo-7120362.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                }}
                animate={{
                  border: whileHover ? "1px solid #E2E8F0" : "",
                  boxShadow: whileHover
                    ? "rgba(0, 0, 0, 0.09) 0px 3px 12px"
                    : "",
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
                  'url("https://images.pexels.com/photos/7120362/pexels-photo-7120362.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
                }
              />
              <Flex
                position={"relative"}
                zIndex="500"
                w="100%"
                // h="200px"
                h="fit-content"
                flexDir={"column"}
                borderRadius="5px"
                p={[6, 6, 10, 10]}
                align={"flex-start"}
              >
                <Heading size="lg" zIndex={200} mb={5}>
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
                <Flex mr={2} mb={5}>
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
                <Button
                  style={{ background: "white", color: "purple" }}
                  size="md"
                  variant={"solid"}
                >
                  Subscribe
                </Button>
              </Flex>
            </motion.div>
          </Box>
        </Center>
      </MotionWrapper>
    </>
  )
}
