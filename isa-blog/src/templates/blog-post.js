import React from "react"
import Img from "gatsby-image"
//Components
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function blogPost({ data }) {
  //Retrieving html data
  // const { html } = data.markdownRemark
  // const { title, thumb } = data.markdownRemark.frontmatter

  return (
    <Layout>
      {/* <div>
        <h1>{title}</h1>
        <div>
          <Img fluid={thumb.childImageSharp.fluid} />
        </div>
        <div
          style={{ color: "red", fontFamily: "Nunito" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div> */}
    </Layout>
  )
}

//data comes from slug in createPage gatsby-node
// export const data = graphql`
//   query MyQuery($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         thumb {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
