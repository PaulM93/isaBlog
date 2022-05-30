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
  Icon,
  Input,
  GridItem,
  HStack,
} from "@chakra-ui/react"
//Components"
import BlogPostWrapper from "../components/BlogPost/BlogPostWrapper"
import SocialIcons from "../components/BlogCards/Util/SocialIcons"
import MotionWrapper from "../components/MotionComponents/MotionWrapper"

export default function SobreMi(props) {
  const { location } = props

  const [whileHover, setWhileHover] = useState<boolean>(false)

  const setHoverStatus = (val: boolean) => {
    setWhileHover(val)
  }

  return (
    <>
      <BlogPostWrapper
        location={props.location}
        changePost={false}
        setHoverStatus={setHoverStatus}
      >
        {/* <Flex
          flexDir={"column"}
          position="relative"
          p={[6, 6, 8, 8]}
          w="100%"
          bg={["white"]}
          maxHeight="100%"
          minHeight={"100vh"}
          borderRadius="10px"
          align="center"
        >
          <Flex flexDir={"column"} align="flex-start">
            <Flex>
              <Avatar
                width="35px"
                height="35px"
                src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/215991452_106042271754854_4781555572612688391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=visdt3YpbvgAX9yr68h&_nc_ht=scontent.feoh3-1.fna&oh=00_AT8evGpwNAJ_TqEKZZeVAza00sxrY5_uWwPx-h3QIO97yA&oe=62914AE2"
              />

              <Box ml={3}>
                <Text fontFamily={"Nunito"} fontWeight={"700"} fontSize={"xs"}>
                  Isa
                </Text>
                <Text fontFamily={"Nunito"} fontSize={"xs"}>
                  Today
                </Text>
              </Box>
            </Flex>

            <Flex flexDir="column" align="center" justify="space-between">
              <SocialIcons />
            </Flex>
          </Flex>
        </Flex> */}
      </BlogPostWrapper>
    </>
  )
}
