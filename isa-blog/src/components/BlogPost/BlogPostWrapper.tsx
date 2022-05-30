import React from "react"
import { motion } from "framer-motion"
//Components
import NavBar from "../Navbar/Navbar"
import ChangePost from "./ChangePost"
import Footer from "../Footer"
import { Flex, Box } from "@chakra-ui/react"

interface BlogPostWrapper {
  location: string
  children: any
  setHoverStatus: (val: boolean) => void
  changePost: boolean
}

export default function BlogPostWrapper({
  location,
  children,
  setHoverStatus,
  changePost,
}: BlogPostWrapper) {
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
            <ChangePost side={false} url={""} displayButton={changePost} />
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            whileHover={{
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            }}
            onHoverStart={() => setHoverStatus(true)}
            onHoverEnd={() => setHoverStatus(false)}
          >
            <Flex
              flexDir={"column"}
              position="relative"
              p={[6, 6, 8, 8]}
              w="100%"
              bg={["white"]}
              maxHeight="100%"
              minHeight={"100%"}
              borderRadius="10px"
              align="center"
            >
              {children}
            </Flex>
          </motion.div>
          <Box
            minWidth={["0%", "0%", "15%", "20%"]}
            display={["none", "none", "block", "block"]}
          >
            <ChangePost side={true} url={""} displayButton={changePost} />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
