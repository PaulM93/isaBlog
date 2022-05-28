import React from "react"
//Components
import NavBar from "../Navbar/Navbar"
import ChangePost from "./ChangePost"
import Footer from "../Footer"
import { Flex, Box } from "@chakra-ui/react"

export default function Wrapper({ location, children }) {
  return (
    <>
      <NavBar location={location} />
      <Flex
        background={"#F3F5F7"}
        width={"100%"}
        height="100%"
        justify={"center"}
        pt={90}
      >
        <Flex
          width={["90%", "90%", "90%", "75%"]}
          justify={"center"}
          height={"fit-content"}
          paddingTop="30px"
          paddingBottom={"100px"}
        >
          <Box
            minWidth={["0%", "0%", "15%", "20%"]}
            display={["none", "none", "block", "block"]}
          >
            <ChangePost side={false} url={""} />
          </Box>
          {children}
          <Box
            minWidth={["0%", "0%", "15%", "20%"]}
            display={["none", "none", "block", "block"]}
          >
            <ChangePost side={true} url={""} />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
