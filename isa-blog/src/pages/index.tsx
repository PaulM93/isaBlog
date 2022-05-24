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
  Center,
  Text,
  Avatar,
  GridItem,
  HStack,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"
import SocialIcons from "../components/SocialIcons"
import SmallCard from "../components/BlogCards/SmallCard"
import BigCard from "../components/BlogCards/BigCard"
import CardButtons from "../components/CardButtons"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import FloatingNavbar from "../components/Navbar/FloatingNavbar"
import Navbar from "../components/Navbar/Navbar"

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

  const [imagePosition, setImagePosition] = useState(-15)
  const [divPosition, setDivPosition] = useState(0)

  const [shouldShowActions, setShouldShowActions] = useState(false)
  useEffect(
    () =>
      yRange.onChange(v => {
        //Can I get pixels?
        console.log("Vssdf", v)
        console.log("yRange", yRange.current)
        setCurrentPercent(100 - Math.trunc(yRange.current))
        setDivPosition(-Math.trunc(yRange.current * 2))
        setImagePosition(imagePosition - Math.trunc(yRange.current * 2))
        if (Math.trunc(yRange.current) > 15) {
          setShouldShowActions(true)
        } else {
          setShouldShowActions(false)
        }
        // if (Math.trunc(yRange.current) < 66.66) {
        //   setShouldShowActions(false)
        // } else {
        //   setShouldShowActions(true)
        // }
      }),
    [yRange]
  )

  const cardData = [
    {
      src: "https://images.pexels.com/photos/6130307/pexels-photo-6130307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Por que amo Mexico",
      hashtags: [],
    },
    {
      src: "https://images.pexels.com/photos/10060128/pexels-photo-10060128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "El Agua de mi Alma",
      hashtags: [],
    },
    {
      src: "https://images.pexels.com/photos/8608674/pexels-photo-8608674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "La Ciudad de Vistas",
      hashtags: [],
    },
    {
      src: "https://images.pexels.com/photos/2388639/pexels-photo-2388639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Edificio de alla",
      hashtags: [],
    },
  ]
  const smallCardMarkup = cardData.map(card => (
    <GridItem>
      <SmallCard src={card.src} title={card.title} hashtags={[]} />
    </GridItem>
  ))

  // useEffect(() => {
  //   function handleScroll() {
  //     const yPos = window.scrollY
  //     const isScrollingDown = yPos > 0
  //     setShouldShowActions(isScrollingDown)
  //   }
  //   window.addEventListener("scroll", handleScroll, false)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll, false)
  //   }
  // }, [])

  console.log("Image Positon", imagePosition)

  return (
    // <Layout location={location}>
    <>
      <Box width="100%">
        <FloatingNavbar shouldShowActions={shouldShowActions} />
        <Box
          // bg="whiteAlpha.100"
          bg="whiteAlpha.200"
          maxHeight={"fit-content"}
          minHeight="fit-content"
        >
          <Navbar />
          <Flex
            width="100%"
            mt={5}
            mb={10}
            justify="center"
            height="100%"
            // bg="blue"
          >
            <Grid
              w={["90%", "90%", "95%", "75%"]}
              templateColumns={["", "", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
              gap={10}
            >
              <GridItem maxHeight={"100%"}>
                <BigCard />
              </GridItem>
              <GridItem minHeight={"100%"} maxHeight="100%">
                <Grid
                  // bg="violet"
                  templateColumns={["", "", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
                  templateRows={["", "", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
                  gap={7}
                >
                  {smallCardMarkup}
                </Grid>
              </GridItem>
            </Grid>
          </Flex>
        </Box>
        <Center mb={20}>
          <Banner />
        </Center>
        {/* <Box mt={10}>
          <Flex width={"100%"} mt={5} justify="center">
            <Grid w="75%" templateColumns="repeat(2, 1fr)" gap={10}>
              <GridItem>
                <Grid
                  // bg="violet"
                  templateColumns="repeat(2, 1fr)"
                  templateRows="repeat(2, 1fr)"
                  gap={7}
                >
                  {smallCardMarkup}
                </Grid>
              </GridItem>
              <GridItem>
                <BigCard />
              </GridItem>
            </Grid>
          </Flex>
        </Box> */}

        {/* This remains the navBar */}
      </Box>

      {/* <Footer /> */}
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
{
  /* <Image
                  w="100%"
                  height="500px"
                  src="https://images.pexels.com/photos/8090376/pexels-photo-8090376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt="Dan Abramov"
                  objectFit="cover"
                  height="300px"
                  // position={"absolute"}
                />
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
                </Button> */
}

{
  /* <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: divPosition * 2 }}
                  transition={{ duration: 0.2 }}
                  // style={{ position: "absolute", top: `${imagePosition}%` }}
                  // style={{ position: "relative" }}
                >
                  <Image
                    w="500px"
                    src="https://images.pexels.com/photos/8090376/pexels-photo-8090376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="Dan Abramov"
                    objectFit="cover"
                    height="300px"
                    // position={"absolute"}
                  />
                </motion.div> */
}
