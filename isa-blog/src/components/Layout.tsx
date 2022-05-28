import * as React from "react"
import { Center, Flex } from "@chakra-ui/react"
//Components
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"

const Layout = ({ location, children }) => {
  return (
    <>
      <Navbar location={location} />
      <Center
        width="100%"
        bg="#F3F5F7"
        minHeight={"fit-content"}
        pt={"90px"}
        pb={"90px"}
      >
        <Flex
          justify={"center"}
          flexDir="column"
          w={["90%", "90%", "90%", "75%"]}
        >
          {children}
        </Flex>
      </Center>
      <Footer />
    </>
  )
}

export default Layout
