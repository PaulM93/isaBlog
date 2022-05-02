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

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts: Object = data.allMarkdownRemark.nodes

  // console.log(data.allMarkdownRemark.nodes)

  // const { title, description } = data.allMarkdownRemark.nodes.frontMatter
  // console.log(title)
  // console.log(description)

  // const posts = data.blogPosts.nodes
  // console.log(posts)

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} key>
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }
  // const images = data.blogPosts.nodes.frontMatter.thumb

  // const blogCards = posts.map(post => (
  //   <GridItem minWidth="100%">
  //     <Card post={post} />
  //   </GridItem>
  // ))
  // posts.map(post => console.log(post))

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
            {/* {blogCards} */}
          </Grid>
        </Box>
      </Flex>
    </Layout>
  )
}

export default BlogIndex

// export const blogPosts = graphql`
//   query BlogData {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           date(formatString: "LL")
//           description
//           author
//           hashtags
//           slug
//           title
//           thumb {
//             childImageSharp {
//               fluid {
//                 src
//               }
//             }
//           }
//           avatar {
//             childImageSharp {
//               fluid {
//                 src
//               }
//             }
//           }
//         }
//         timeToRead
//       }
//     }
//   }
// `
