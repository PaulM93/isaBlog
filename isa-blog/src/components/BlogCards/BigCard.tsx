import React, { useState } from "react"
//Components
import SocialIcons from "./Util/SocialIcons"
import MotionLayout from "./MotionLayout"
import Title from "./Util/Title"
import Tags from "./Util/Tags"
import Avatar from "../Avatar"
//chakra
import { Image, Box, Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function BigCard() {
  const [whileHover, setWhileHover] = useState<boolean>(false)

  const setHoverStatus = (val: boolean) => {
    setWhileHover(val)
  }

  return (
    <MotionLayout setHoverStatus={setHoverStatus} cardType={"lg"}>
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
          <Title
            title={"Por que amo Mexico"}
            whileHover={whileHover}
            size={"lg"}
          />
          {/* Tags  */}
          <Box mb={12}>
            <Tags />
          </Box>
          {/* Body Text  */}
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
            <Avatar
              date={"12/03/22"}
              src={
                "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/215991452_106042271754854_4781555572612688391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=visdt3YpbvgAX9yr68h&_nc_ht=scontent.feoh3-1.fna&oh=00_AT8evGpwNAJ_TqEKZZeVAza00sxrY5_uWwPx-h3QIO97yA&oe=62914AE2"
              }
              author={"Isa"}
            />
            <SocialIcons />
          </Flex>
        </Flex>
      </Flex>
    </MotionLayout>
  )
}
