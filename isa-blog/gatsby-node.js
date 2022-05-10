const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve("./src/templates/blog-post.tsx")

  return graphql(
    `
      query MyQuery {
        allContentfulPost {
          edges {
            node {
              author
              createdAt(formatString: "LL")
              slug
              title
              image {
                gatsbyImageData(layout: FIXED, quality: 90, width: 500)
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Node Error", result.errors)
      throw result.errors
    }

    // content {
    //   raw
    // }

    //Create Blog Post pages -- access the page nodes
    const posts = result.data.allContentfulPost.edges

    if (posts.length > 0) {
      posts.forEach((post, index) => {
        const previousPostId = index === 0 ? null : posts[index - 1].id
        const nextPostId =
          index === posts.length - 1 ? null : posts[index + 1].id

        console.log("THIS IS THE SLUG", post.node.slug)

        createPage({
          path: post.node.slug, //we can see this info in graphql
          component: blogPost,
          context: {
            slug: post.node.slug,
            previousPostId,
            nextPostId,
          },
        })
      })
    }
  })
}
// exports.createPages = async ({ actions }) => {
//   //Naming pages with the slug
//   const blogPost = path.resolve("./src/templates/blog-post.js")
//   // const { data } = await graphql(`
//   //   query MyQuery {
//   //     allMarkdownRemark {
//   //       nodes {
//   //         frontmatter {
//   //           slug
//   //           category
//   //         }
//   //       }
//   //     }
//   //   }
//   // `
//   const result = await graphql(
//     `
//     {
//       blogPosts: allMarkdownRemark(
//         filter: {fileAbsolutePath: {regex: "/\/blog\//"}}
//       ) {
//         nodes {
//           id
//           frontmatter {
//             slug
//           }
//         }
//       }`
//   )
//   const posts = result.data.blogPosts.nodes
//   console.log("node", posts)

// if(posts.lengt)

// data.allMarkdownRemark.nodes.forEach(node => {
//   actions.createPage({
//     // path: node.frontmatter.slug,
//     path: `${node.frontmatter.category}/` + node.frontmatter.slug,
//     //Import template with absolute path -- generate with path.resolve
//     component: blogPost,
//     //We pass the slug to the template
//     context: {
//       slug: `${node.frontmatter.category}/` + node.frontmatter.slug,
//     },
//   })
// })

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Define a template for blog post
//   const blogPost = path.resolve(`./src/templates/blog-post.js`)

//   // Get all markdown blog posts sorted by date
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: ASC }
//           limit: 1000
//         ) {
//           nodes {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your blog posts`,
//       result.errors
//     )
//     return
//   }

//   const posts = result.data.allMarkdownRemark.nodes

//   // Create blog posts pages
//   // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   // `context` is available in the template as a prop and as a variable in GraphQL

// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
