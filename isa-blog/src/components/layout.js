import * as React from "react"
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
  GridItem,
  HStack,
} from "@chakra-ui/react"
import { Link } from "gatsby"
//Components
import Header from "./Header"
import Footer from "./Footer"
import CardButtons from "./CardButtons"

const Layout = ({ children }) => {
  // const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <Flex w="100%" flexDir={"column"} align={"center"} bg={"#F6F5F6"}>
      <Box h="5px" bg="purple" w="100%"></Box>
      <Flex
        flexDir="column"
        marginTop="40px"
        minH="100vh"
        w={["85%", "85%", "85%", "70%"]}
        paddingTop={["20px", "20px", "0px", "0px"]}
        // paddingBottom={["80px", "80px", "0px", "0px"]}
        // justify={"center"}
      >
        <Header />
        <Box>{children}</Box>
        <Footer />
      </Flex>
    </Flex>
  )
}

export default Layout
