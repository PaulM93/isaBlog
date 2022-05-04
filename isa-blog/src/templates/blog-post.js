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
  Icon,
  Input,
  GridItem,
  HStack,
} from "@chakra-ui/react"
//Components
import Layout from "../components/layout"
import Avatar from "../components/Avatar"

export default function Post({ pageQuery }) {
  //   //Retrieving html data
  console.log(pageQuery)
  // const { html } = data.markdownRemark
  // const { title, author, date, category, hashtags, avatar, thumb } =
  //   data.markdownRemark.frontmatter

  return (
    <>
      <Layout>sdsdf</Layout>
    </>
  )
}

const pageQuery = graphql`
  query MyQuery {
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

// export default function blogPost({ data }) {
//   //Retrieving html data
//   const { html } = data.markdownRemark
//   const { title, thumb } = data.markdownRemark.frontmatter

//   return (
//     <Layout>
//       <div>
//         <h1>{title}</h1>
//         <div>
//           <Img fluid={thumb.childImageSharp.fluid} />
//         </div>
//         <div
//           style={{ color: "red", fontFamily: "Nunito" }}
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </Layout>
//   )
// }

// //data comes from slug in createPage gatsby-node

//we can access the slug slug: {eq: slug} because we passed it in the context gatsby-node
