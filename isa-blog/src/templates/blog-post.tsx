import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link, graphql } from "gatsby"
import { Provider, LikeButton } from "@lyket/react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { useLocation } from "@reach/router"
//Components
import BlogPostWrapper from "../components/BlogPost/BlogPostWrapper"
//Components
import SocialIcons from "../components/BlogCards/SocialIcons"
import Tags from "../components/BlogCards/Tags"
import { Box, Flex, Heading, Text, Avatar, Divider } from "@chakra-ui/react"

export default function BlogPost(props) {
  const [whileHover, setWhileHover] = useState<Boolean>(false)
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
  } = props.data.contentfulPost

  //Disqus comments
  const location = useLocation()
  const disqusConfig = {
    url: location.href,
    identifier: slug,
    title: title,
  }

  //Contentful Rich Text
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
        return (
          <Heading size="lg" fontFamily={"Nunito"}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <Heading size="md" fontFamily={"Nunito"}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <Heading size="sm" fontFamily={"Nunito"}>
            {children}
          </Heading>
        )
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <ListItem fontFamily={"Nunito"}>{children}</ListItem>
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <OrderedList fontFamily={"Nunito"}>{children}</OrderedList>
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <UnorderedList fontFamily={"Nunito"}>{children}</UnorderedList>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Text mb={10} color="#51515C" fontSize="md" fontFamily={"Nunito"}>
            {children}
          </Text>
        )
      },
    },
  }

  return (
    <>
      <BlogPostWrapper location={props.location}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          whileHover={{
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
          }}
          onHoverStart={() => setWhileHover(true)}
          onHoverEnd={() => setWhileHover(false)}
        >
          <Flex
            flexDir={"column"}
            position="relative"
            p={[6, 6, 8, 8]}
            w="100%"
            bg={["white"]}
            maxHeight="100%"
            minHeight={"100%"}
            borderRadius="10px"
            align="center"
          >
            {/* Image  */}

            {/* //Depending on the number of images in the post we can display it  */}
            <motion.image
              style={{
                height: "400px",
                borderRadius: "10px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                backgroundImage:
                  "url('https://images.pexels.com/photos/6489734/pexels-photo-6489734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
              }}
            />
            {/* Title Container   */}
            <Flex
              pt={[6, 6, 6, 6]}
              pl={[0, 0, 6, 6]}
              // bg="green"
              pr={[0, 0, 6, 6]}
              w="100%"
              align="center"
              justify={"space-between"}
            >
              <Flex flexDir={"column"} align="flex-start">
                <Flex>
                  <Avatar
                    width="35px"
                    height="35px"
                    src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/215991452_106042271754854_4781555572612688391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=visdt3YpbvgAX9yr68h&_nc_ht=scontent.feoh3-1.fna&oh=00_AT8evGpwNAJ_TqEKZZeVAza00sxrY5_uWwPx-h3QIO97yA&oe=62914AE2"
                  />

                  <Box ml={3}>
                    <Text
                      fontFamily={"Nunito"}
                      fontWeight={"700"}
                      fontSize={"xs"}
                    >
                      {author}
                    </Text>
                    <Text fontFamily={"Nunito"} fontSize={"xs"}>
                      {createdAt}
                    </Text>
                  </Box>
                </Flex>
              </Flex>

              <Flex flexDir="column" align="center" justify="space-between">
                <SocialIcons />
              </Flex>
            </Flex>
            <Divider pb={4} />
            <Flex width="100%" flexDir={"column"} align="center" mt={8}>
              <Heading
                size={"lg"}
                mb={4}
                textAlign="center"
                fontFamily={"Lora"}
                bgGradient={
                  whileHover
                    ? "linear(to-l, #0865AF,  #7B0E5B)"
                    : "linear(to-l, #000000, #000000)"
                }
                bgClip="text"
              >
                {title}
              </Heading>
              <Tags />
            </Flex>
            {/* Text Render  */}
            <Box mt={10} fontFamily={"Nunito"}>
              {renderRichText(bodyRichText, options)}
            </Box>
            {/* Comment render  */}
            <Box mt={20} w="100%">
              <Disqus config={disqusConfig} />
            </Box>
          </Flex>
        </motion.div>
      </BlogPostWrapper>
    </>
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
