import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion"
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
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"
import SocialIcons from "../components/SocialIcons"
import CardButtons from "../components/CardButtons"
import Footer from "../components/Footer"

interface BlogIndexProps {
  data: { allContentfulPost: { edges: [{}] } }
}

const BlogIndex = ({
  data: {
    allContentfulPost: { edges },
  },
}: BlogIndexProps) => {
  const blogPosts: [{}] = edges

  console.log(blogPosts)

  const blogCards = blogPosts.map(post => (
    <GridItem minWidth="100%">
      <Card post={post} />
    </GridItem>
  ))

  const [currentPercent, setCurrentPercent] = useState(100)
  const [currentProgressColor, setCurrentProgressColor] = useState(null)
  const [progressHeight, setProgressHeight] = useState(70)
  //Scroll y progress = vertical scroll progres between 0 - 1
  const { scrollYProgress } = useViewportScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  console.log("Current", currentPercent)

  useEffect(
    () =>
      yRange.onChange(v => {
        setCurrentPercent(100 - Math.trunc(yRange.current))
      }),
    [yRange]
  )

  return (
    // <Layout location={location}>
    <>
      <Box minH={"200vh"} width="100%">
        <Flex h="100px" justify={"center"} w="100%">
          <Box width="100%" height="75vh" position="absolute">
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: `${currentPercent}%`,
                background: "#F8F4F0",
              }}
            />
          </Box>
          <Flex
            position="relative"
            h="100%"
            justify={"space-between"}
            align="center"
            w="75%"
          >
            <Heading size="md">Un Cafe con Isa</Heading>
            <HStack>
              <Text fontSize={"md"}>Home</Text>
              <Text fontSize={"md"}>About</Text>
              <Text fontSize={"md"}>Contact</Text>
            </HStack>
            <HStack>
              <Text fontSize={"md"}>Home</Text>
              <Text fontSize={"md"}>About</Text>
              <Text fontSize={"md"}>Contact</Text>
            </HStack>
          </Flex>
        </Flex>
        <Flex width={"100%"} mt={20} justify="center">
          <Flex w="75%" position="relative">
            <Flex w="50%" flexDir={"column"}>
              <Heading size="md">Un blog de viajes, libros y comida</Heading>
              <Heading size="2xl" mb={5} mt={3}>
                I Shouted Above <br /> the Sudden Noise
              </Heading>
              <Text w="60%" size="sm">
                In this article + guide we will cover all the necessary tools
                and techniques required to create an animation that tracks the
                progress of a user's position
              </Text>
              <Button mt={4} w="30%">
                Read more
              </Button>
            </Flex>
            <Flex w="50%">
              <Image
                w="500px"
                top={"-15%"}
                src="https://images.pexels.com/photos/8090376/pexels-photo-8090376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Dan Abramov"
                objectFit="cover"
                height="500px"
                position={"absolute"}
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
    // </Layout>
  )
}

export default BlogIndex

export const blogPosts = graphql`
  query BlogPosts {
    allContentfulPost {
      edges {
        node {
          title
          slug
          createdAt(formatString: "LL")
          author
          image {
            gatsbyImageData(width: 300, resizingBehavior: FILL)
          }
          avatar {
            avatarImage {
              gatsbyImageData(width: 30, resizingBehavior: FILL)
            }
          }
        }
      }
    }
  }
`
