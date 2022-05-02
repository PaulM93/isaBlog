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

export default function post({ data }) {
  //   //Retrieving html data
  // const { html } = data.markdownRemark
  // const { title, author, date, category, hashtags, avatar, thumb } =
  //   data.markdownRemark.frontmatter
  console.log(data)

  return (
    <>
      <Layout>sdsdf</Layout>
    </>
  )
}

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
export const data = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
