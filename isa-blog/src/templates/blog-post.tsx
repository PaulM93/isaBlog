import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
  HStack,
} from "@chakra-ui/react"
//Components
import Layout from "../components/layout"
import Avatar from "../components/Avatar"

export default function blogPost({ data }) {
  console.log(data)

  let richText = JSON.parse(data.contentfulPost.content.raw)

  // const options = { renderNode: {} }

  return (
    <Layout>
      <div>
        {/* <h1>{title}</h1> */}
        <div>{/* <Img fluid={thumb.childImageSharp.fluid} /> */}</div>
        <div
          style={{ color: "red", fontFamily: "Nunito" }}
          // dangerouslySetInnerHTML={{ __html: html }}
        >
          {renderRichText(richText)}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContentfuBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      author
      createdAt(formatString: "LL")
      content {
        raw
      }
      slug
      subtitle
      title
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
