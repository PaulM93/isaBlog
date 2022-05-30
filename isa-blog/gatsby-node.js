const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve("./src/templates/blog-post.tsx");

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
  ).then((result) => {
    if (result.errors) {
      console.log("Node Error", result.errors);
      throw result.errors;
    }

    //Create Blog Post pages -- access the page nodes
    const posts = result.data.allContentfulPost.edges;

    if (posts.length > 0) {
      posts.forEach((post, index) => {
        const previousPostId = index === 0 ? null : posts[index - 1].id;
        const nextPostId =
          index === posts.length - 1 ? null : posts[index + 1].id;

        console.log("THIS IS THE SLUG", post.node.slug);

        createPage({
          path: post.node.slug, //we can see this info in graphql
          component: blogPost,
          context: {
            slug: post.node.slug,
            previousPostId,
            nextPostId,
          },
        });
      });
    }
  });
};
