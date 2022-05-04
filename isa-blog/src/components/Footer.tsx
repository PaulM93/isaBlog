import React from "react"
import { Flex, Heading, Text } from "@chakra-ui/react"
//Components
import SocialIcons from "./SocialIcons"

const Footer: React.FC = () => {
  return (
    <>
      <Flex
        paddingTop={["80px", "80px", "80px", "40px"]}
        width="100%"
        paddingBottom={["100px"]}
        mt={4}
        align="flex-start"
        justify={["center", "center", "space-between", "space-between"]}
      >
        <Text></Text>
        <Flex flexDir={"column"} align="center">
          <SocialIcons />
          <Heading
            mt={1}
            fontFamily="lora"
            size="sm"
            display={["flex", "flex", "none", "none"]}
          >
            por Isa
          </Heading>
        </Flex>

        <Heading
          display={["none", "none", "flex", "flex"]}
          mt={1}
          fontFamily="lora"
          size="sm"
        >
          por Isa
        </Heading>
      </Flex>
    </>
  )
}
export default Footer
