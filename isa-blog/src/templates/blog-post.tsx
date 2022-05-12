import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { Provider, LikeButton } from "@lyket/react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { useLocation } from "@reach/router"
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
  Icon,
  Input,
  GridItem,
  Avatar,
  ListItem,
  HStack,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react"
//Components
import Layout from "../components/layout"
import CardAvatar from "../components/Avatar"

export default function blogPost({ data }) {
  const {
    title,
    author,
    avatar: {
      name,
      avatarImage: {
        gatsbyImageData: { images },
      },
    },
    image,
    slug,
    createdAt,
    bodyRichText,
  } = data.contentfulPost

  //Disqus comments
  const location = useLocation()
  const disqusConfig = {
    url: location.href,
    identifier: slug,
    title: title,
  }

  //Contentful Rich Text
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return (
          <Heading size="lg" fontFamily={"Nunito"}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <Heading size="md" fontFamily={"Nunito"}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <Heading size="sm" fontFamily={"Nunito"}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <ListItem fontFamily={"Nunito"}>{children}</ListItem>
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <OrderedList fontFamily={"Nunito"}>{children}</OrderedList>
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <UnorderedList fontFamily={"Nunito"}>{children}</UnorderedList>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Text mb={10} color="#51515C" fontSize="md" fontFamily={"Nunito"}>
            {children}
          </Text>
        )
      },
    },
  }

  const [currentPercent, setCurrentPercent] = useState(0)
  const [currentProgressColor, setCurrentProgressColor] = useState(null)
  const [progressWidth, setProgressWidth] = useState("0")
  //Scroll y progress = vertical scroll progres between 0 - 1
  const { scrollYProgress } = useViewportScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(
    () =>
      yRange.onChange(v => {
        setCurrentPercent(Math.trunc(yRange.current))
      }),
    [yRange]
  )

  useEffect(() => {
    console.log("Current", currentPercent)
    setCurrentProgressColor(
      currentPercent >= 90
        ? "#CDFF00"
        : currentPercent >= 45
        ? "#31A9D5"
        : currentPercent >= 20
        ? "#F2BD1D"
        : "#FF3B77"
    )
  }, [currentPercent])

  return (
    <Layout>
      <motion.div
        style={{ display: "flex" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <motion.div
          style={{
            background: currentProgressColor,
            position: "fixed",
            top: "0",
            left: "0",
            width: `${currentPercent}%`,
            height: "20px",
          }}
        ></motion.div>
        <Grid w="100%" templateColumns="repeat(8, 1fr)" gap={3}>
          <GridItem colSpan={[8, 8, 6, 6]}>
            <Flex width="100%" minHeight="500px" borderRadius={"5px"}>
              <Flex flexDir={"column"} width="100%">
                <Box w="100%">
                  <Image
                    borderTopLeftRadius={5}
                    borderTopRightRadius={5}
                    maxHeight="350px"
                    objectFit="cover"
                    objectPosition="top"
                    w="100%"
                    src={image.gatsbyImageData.images.fallback.src}
                    alt={slug}
                  />
                </Box>
                <Box p={8} bg="white">
                  <Flex align="center" justify="space-between" w="100%" mb={2}>
                    <Heading fontFamily={"Nunito"} fontWeight="900" size="lg">
                      {title}
                    </Heading>
                    <Box fontSize={"14px"} color="green">
                      <Provider apiKey="pt_67130c06f822ef90712c3ff7033b1f">
                        <LikeButton
                          theme={{ primary: "green" }}
                          id={slug}
                          hideCounterIfLessThan={3}
                          component={LikeButton.templates.Twitter}
                        />
                      </Provider>
                    </Box>

                    {/* <CommentCount config={disqusConfig} placeholder={"..."} /> */}
                  </Flex>
                  <Flex align="center" mb={10}>
                    <CardAvatar
                      author={name}
                      src={images.fallback.src}
                      date={createdAt}
                    />
                  </Flex>
                  {/* bodyRichText */}
                  <Box fontFamily={"Nunito"}>
                    {renderRichText(bodyRichText, options)}
                  </Box>
                  <Box mt={20}>
                    <Disqus config={disqusConfig} />
                  </Box>
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
              <Flex
                w="100%"
                borderRadius="5px"
                p={5}
                bg="#ffffff"
                color={"fafafa"}
                ml={2}
                align="center"
                justify={"center"}
                flexDir={"column"}
              >
                <Avatar size="lg" src="https://bit.ly/kent-c-dodds" />
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
                  <Button colorScheme="pink" variant="outline" size="sm" mt={5}>
                    Sobre mi
                  </Button>
                </Link>
              </Flex>
              <Flex
                w="100%"
                mt={2}
                borderRadius="5px"
                p={5}
                bg="#ffffff"
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
  )
}

export const pageQuery = graphql`
  query ContentfuBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      author
      createdAt(formatString: "LL")
      bodyRichText {
        raw
      }
      image {
        gatsbyImageData(
          width: 500
          layout: FULL_WIDTH
          cropFocus: CENTER
          resizingBehavior: FILL
        )
      }
      slug
      title
      avatar {
        name
        avatarImage {
          gatsbyImageData(width: 50, layout: FULL_WIDTH)
        }
      }
    }
  }
`
