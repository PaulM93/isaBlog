import * as React from "react"
import { motion } from "framer-motion"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
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

  return (
    <Layout location={location}>
      <Flex
        flexDir={"column"}
        // minHeight="90vh"
        justify="space-between"
      >
        <Box mb={5}>
          <Grid
            w="100%"
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={4}
          >
            {blogCards}
          </Grid>
        </Box>
      </Flex>
    </Layout>
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
