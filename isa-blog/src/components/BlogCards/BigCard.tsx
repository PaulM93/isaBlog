import React, { useState } from "react"
//Components
import SocialIcons from "./SocialIcons"
import Tags from "./Tags"
import { Image, Box, Flex, Heading, Text, Avatar } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function BigCard() {
  const [whileHover, setWhileHover] = useState<Boolean>(false)

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
      }}
      style={{ cursor: "pointer", overflow: "hidden", height: "100%" }}
      onHoverStart={() => setWhileHover(true)}
      onHoverEnd={() => setWhileHover(false)}
    >
      <Flex
        flexDir={"column"}
        position="relative"
        p={[6, 6, 8, 8]}
        maxHeight="100%"
        minHeight={"100%"}
        borderRadius="10px"
        bg="white"
        justify={"space-between"}
      >
        {/* Image  */}

        <Image
          zIndex={10}
          borderRadius="10px"
          src="https://images.pexels.com/photos/6489734/pexels-photo-6489734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Dan Abramov"
          objectFit="cover"
          height={["300px", "300px", "400px", "450px"]}
        />
        {/* Container   */}
        <Flex
          minHeight="50%"
          pt={[6, 6, 6, 6]}
          pl={[0, 0, 6, 6]}
          pr={[0, 0, 6, 6]}
          flexDir="column"
          align="center"
        >
          <Heading
            size={"lg"}
            mb={4}
            textAlign="center"
            fontFamily={"Lora"}
            bgGradient={
              whileHover
                ? "linear(to-l, #0865AF,  #7B0E5B)"
                : "linear(to-l, #000000, #000000)"
            }
            bgClip="text"
          >
            Por que amo Mexico
          </Heading>
          <Box mb={12}>
            <Tags />
          </Box>

          <Text fontSize={"md"} mb={6} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum tempus nibh eu faucibus. Phasellus ornare nibh quis tellus
            aliquet placerat.
            <motion.div
              initial={{ opacity: 0, display: "none" }}
              animate={{ opacity: whileHover ? 1 : 0, display: "inline" }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                marginLeft: "4px",
                display: "inline",
                color: "#BA3884",
              }}
            >
              <Text
                display={["none", "none", "inline", "inline"]}
                fontSize={"md"}
              >
                Read more
              </Text>
            </motion.div>
          </Text>
          <Flex
            pt={[6, 6, 6, 6]}
            pl={[0, 0, 6, 6]}
            pr={[0, 0, 6, 6]}
            width="100%"
            align="center"
            justify="space-between"
          >
            <Flex>
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
            <SocialIcons />
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  )
}
