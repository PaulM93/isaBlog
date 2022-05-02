import React from "react"
import { Link } from "gatsby"
import * as styles from "./post.module.css"
import { motion } from "framer-motion"
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
//Components
import Layout from "../layout"

export default function post() {
  return (
    <>
      <Layout>
        <motion.div
          style={{ display: "flex" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <Grid w="100%" templateColumns="repeat(8, 1fr)" gap={3}>
            <GridItem colSpan={[8, 8, 6, 6]}>
              <Flex width="100%" minHeight="500px" borderRadius={"5px"}>
                <Flex flexDir={"column"} bg="white">
                  <Box w="100%">
                    <Image
                      borderTopLeftRadius={5}
                      borderTopRightRadius={5}
                      maxHeight="350px"
                      objectFit="cover"
                      objectPosition="top"
                      w="100%"
                      src="https://images.pexels.com/photos/757828/pexels-photo-757828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Dan Abramov"
                    />
                  </Box>
                  <Box p={8} bg="white">
                    <Flex
                      align="center"
                      justify="space-between"
                      w="100%"
                      mb={5}
                    >
                      <Heading fontFamily={"Nunito"} fontWeight="900" size="lg">
                        Que tome en la CDMX?
                      </Heading>
                      <Flex align="center">
                        <Avatar size="sm" src="https://bit.ly/kent-c-dodds" />
                        <Box ml={2}>
                          <Text
                            fontFamily={"Lora"}
                            fontWeight="700"
                            fontSize={"xs"}
                          >
                            Paul Marley
                          </Text>
                          <Text
                            fontFamily={"Lora"}
                            fontSize={"xs"}
                            textTransform="capitalize"
                          >
                            Mar 27 2022
                          </Text>
                        </Box>
                      </Flex>
                    </Flex>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem colSpan={2} display={["none", "none", "flex", "flex"]}>
              <Flex
                flexDir={["row", "row", "column", "column"]}
                w={"100%"}
                align="center"
              >
                <div className={styles.about}>
                  <Avatar size="xl" src="https://bit.ly/kent-c-dodds" />
                  <Heading
                    mt={2}
                    fontWeight={"900"}
                    fontFamily={"Nunito"}
                    size="md"
                  >
                    Soy Isa
                  </Heading>
                  <Text fontSize="sm" fontFamily={"Lora"}>
                    y soy de Colombia
                  </Text>
                  <Link to="/about">
                    <Button
                      colorScheme="pink"
                      variant="outline"
                      size="sm"
                      mt={5}
                    >
                      Sobre mi
                    </Button>
                  </Link>
                </div>
                <Flex
                  w="100%"
                  mt={2}
                  borderRadius="10px"
                  p={5}
                  // background="rgb(184,50,128)"
                  bg="#ffffff"
                  // backgroundImage={"url('../images/melt.svg')"}
                  color={"fafafa"}
                  maxH="250px"
                  ml={2}
                  align="center"
                  justify={"center"}
                  flexDir={"column"}
                >
                  <Heading
                    mb={2}
                    fontWeight={"900"}
                    fontFamily={"Lora"}
                    size="md"
                  >
                    Subscribete
                  </Heading>
                  <Input mb={2} placeholder="Enter your email..." />
                  <Button size="sm" colorScheme="blackAlpha">
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </motion.div>
      </Layout>
    </>
  )
}
