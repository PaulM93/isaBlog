import * as React from "react"
import { Link, graphql } from "gatsby"
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
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    // <Layout location={location} title={siteTitle}>
    <Flex
      bg="#fafafa"
      minW={"100%"}
      minH="100vh"
      justify={"center"}
      align="center"
    >
      <Flex w="70%" flexDir={"column"} minHeight="85vh" justify="space-between">
        <Box mb={10}>
          <Text m={0} size="lg" fontFamily={"nunito"}>
            Un Cafe con Isa
          </Text>
          <Heading fontFamily={"lora"} fontWeight="700" m={0} size="lg">
            Un Blog de viajes, comida y libros
          </Heading>
        </Box>
        <Box>
          <Flex w="100%" justify={"space-between"} mb={1}>
            <HStack>
              <Button size="sm" variant="ghost">
                Comida
              </Button>
              <Button size="sm" variant="ghost">
                Libros
              </Button>
              <Button size="sm" variant="ghost">
                Viajes
              </Button>
            </HStack>
            <HStack>
              <Button size="sm" variant="ghost">
                Sobre mi
              </Button>
              <Button size="sm" variant="ghost">
                Subscribete
              </Button>
            </HStack>
          </Flex>
          <Grid
            w="100%"
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={4}
          >
            <GridItem minWidth="100%">
              <Card />
            </GridItem>
            <GridItem minWidth="100%">
              <Card />
            </GridItem>
            <GridItem minWidth="100%">
              <Card />
            </GridItem>
            <GridItem minWidth="100%">
              <Card />
            </GridItem>
          </Grid>
        </Box>
        <Flex
          fontFamily={"loro"}
          w="100%"
          mt={12}
          justify="space-between"
          align="center"
        >
          <Text m={0} />
          <Text m={0}>Encuentrame</Text>
          <Text m={0} fontFamily="lora" fontWeight="700">
            por Isa
          </Text>
        </Flex>
      </Flex>
    </Flex>
    // </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

{
  /* <Bio /> */
}
{
  /* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */
}
