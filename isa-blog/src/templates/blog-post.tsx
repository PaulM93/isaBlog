import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
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
  Icon,
  Input,
  GridItem,
  Avatar,
  HStack,
} from "@chakra-ui/react"
//Components
import Layout from "../components/layout"
import CardAvatar from "../components/Avatar"

export default function blogPost({ data }) {
  console.log(data)
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
        return <Heading size="lg">{children}</Heading>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <Heading size="md">{children}</Heading>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <Heading size="sm">{children}</Heading>
      },
    },
  }

  return (
    <Layout>
      <motion.div
        style={{ display: "flex" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Grid w="100%" templateColumns="repeat(8, 1fr)" gap={3}>
          <GridItem colSpan={[8, 8, 6, 6]} bg="green">
            <Flex width="100%" minHeight="500px" borderRadius={"5px"}>
              <Flex flexDir={"column"} bg="white" width="100%">
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
                  <Flex align="center" justify="space-between" w="100%" mb={5}>
                    <Heading fontFamily={"Nunito"} fontWeight="900" size="lg">
                      {title}
                    </Heading>
                    <Flex align="center">
                      <CardAvatar
                        author={name}
                        src={images.fallback.src}
                        date={createdAt}
                      />
                    </Flex>
                  </Flex>
                  {/* bodyRichText */}
                  <Box>{renderRichText(bodyRichText, options)}</Box>
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
      subtitle
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

// import React from "react"
// import Img from "gatsby-image"
// //Components
// import Layout from "../components/layout"
// import { graphql } from "gatsby"

// //data comes from slug in createPage gatsby-node

//we can access the slug slug: {eq: slug} because we passed it in the context gatsby-node
