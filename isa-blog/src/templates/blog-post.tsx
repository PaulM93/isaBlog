import React, { useState } from "react"
//Components
import SocialIcons from "../components/BlogCards/SocialIcons"
import Tags from "../components/BlogCards/Tags"
import {
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  IconButton,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import NavBar from "../components/Navbar/Navbar"

export default function BigCard() {
  const [whileHover, setWhileHover] = useState<Boolean>(false)

  return (
    // <motion.div
    //   whileHover={{
    //     scale: 1.01,
    //     transition: { duration: 0.2 },
    //     boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
    //   }}
    //   style={{ cursor: "pointer", overflow: "hidden", height: "100%" }}
    //   onHoverStart={() => setWhileHover(true)}
    //   onHoverEnd={() => setWhileHover(false)}
    // >
    <>
      <NavBar />
      <Flex
        mt={"90px"}
        bg="#F3F5F7"
        flexDir={"column"}
        position="relative"
        p={[6, 6, 8, 8]}
        maxHeight="100%"
        minHeight={"100%"}
        borderRadius="10px"
        bg="white"
        justify={"space-between"}
      >
        {/* Image  */}
        {/* <Box h="100%" width="100%">
        <motion.image
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          style={{
            height: "400px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            backgroundImage:
              "url('https://images.pexels.com/photos/6489734/pexels-photo-6489734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          }}
        />
      </Box> */}
        <Image
          zIndex={10}
          borderRadius="10px"
          width="100%"
          height="100%"
          src="https://images.pexels.com/photos/6489734/pexels-photo-6489734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Dan Abramov"
          objectFit="cover"
          height={["300px", "300px", "400px", "450px"]}
        />
        {/* Container   */}
        <Flex
          minHeight="50%"
          pt={[6, 6, 6, 6]}
          pl={[0, 0, 6, 6]}
          pr={[0, 0, 6, 6]}
          flexDir="column"
          align="center"
        >
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
            Por que amo Mexico
          </Heading>
          <Box mb={12}>
            <Tags />
          </Box>

          <Text fontSize={"md"} mb={6} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum tempus nibh eu faucibus. Phasellus ornare nibh quis tellus
            aliquet placerat.
            <motion.div
              initial={{ opacity: 0, display: "none" }}
              animate={{ opacity: whileHover ? 1 : 0, display: "inline" }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                marginLeft: "4px",
                display: "inline",
                color: "#BA3884",
              }}
            >
              <Text
                display={["none", "none", "inline", "inline"]}
                fontSize={"md"}
              >
                Read more
              </Text>
            </motion.div>
          </Text>
          <Flex
            pt={[6, 6, 6, 6]}
            pl={[0, 0, 6, 6]}
            pr={[0, 0, 6, 6]}
            width="100%"
            align="center"
            justify="space-between"
          >
            <Flex>
              <Avatar
                width="40px"
                height="40px"
                src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/215991452_106042271754854_4781555572612688391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=visdt3YpbvgAX9yr68h&_nc_ht=scontent.feoh3-1.fna&oh=00_AT8evGpwNAJ_TqEKZZeVAza00sxrY5_uWwPx-h3QIO97yA&oe=62914AE2"
              />

              <Box ml={3}>
                <Text fontFamily={"Lora"} fontWeight={"700"} fontSize={"xs"}>
                  Isa Arrautt
                </Text>
                <Text fontFamily={"Lora"} fontSize={"xs"}>
                  12/03/22
                </Text>
              </Box>
            </Flex>
            <SocialIcons />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

// import React, { useState, useEffect } from "react"
// import { Link, graphql } from "gatsby"
// import { Provider, LikeButton } from "@lyket/react"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { Disqus, CommentCount } from "gatsby-plugin-disqus"
// import { useLocation } from "@reach/router"
// import {
//   motion,
//   useViewportScroll,
//   useSpring,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion"
// import {
//   Container,
//   Image,
//   Button,
//   Grid,
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Icon,
//   Input,
//   GridItem,
//   Avatar,
//   ListItem,
//   HStack,
//   OrderedList,
//   UnorderedList,
//   IconButton,
// } from "@chakra-ui/react"
// //Components
// import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
// import Layout from "../components/layout"
// import Navbar from "../components/Navbars/Navbar"
// import CardAvatar from "../components/Avatar"

// export default function blogPost({ data }) {
//   const {
//     title,
//     author,
//     avatar: {
//       name,
//       avatarImage: {
//         gatsbyImageData: { images },
//       },
//     },
//     image,
//     slug,
//     createdAt,
//     bodyRichText,
//   } = data.contentfulPost

//   //Disqus comments
//   const location = useLocation()
//   const disqusConfig = {
//     url: location.href,
//     identifier: slug,
//     title: title,
//   }

//   //Contentful Rich Text
//   const options = {
//     renderMark: {
//       [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
//     },
//     renderNode: {
//       [INLINES.HYPERLINK]: (node, children) => {
//         const { uri } = node.data
//         return (
//           <a href={uri} className="underline">
//             {children}
//           </a>
//         )
//       },
//       [BLOCKS.HEADING_1]: (node, children) => {
//         return (
//           <Heading size="lg" fontFamily={"Nunito"}>
//             {children}
//           </Heading>
//         )
//       },
//       [BLOCKS.HEADING_2]: (node, children) => {
//         return (
//           <Heading size="md" fontFamily={"Nunito"}>
//             {children}
//           </Heading>
//         )
//       },
//       [BLOCKS.HEADING_3]: (node, children) => {
//         return (
//           <Heading size="sm" fontFamily={"Nunito"}>
//             {children}
//           </Heading>
//         )
//       },
//       [BLOCKS.LIST_ITEM]: (node, children) => {
//         return <ListItem fontFamily={"Nunito"}>{children}</ListItem>
//       },
//       [BLOCKS.OL_LIST]: (node, children) => {
//         return <OrderedList fontFamily={"Nunito"}>{children}</OrderedList>
//       },
//       [BLOCKS.LIST_ITEM]: (node, children) => {
//         return <UnorderedList fontFamily={"Nunito"}>{children}</UnorderedList>
//       },
//       [BLOCKS.PARAGRAPH]: (node, children) => {
//         return (
//           <Text mb={10} color="#51515C" fontSize="md" fontFamily={"Nunito"}>
//             {children}
//           </Text>
//         )
//       },
//     },
//   }

//   const [currentPercent, setCurrentPercent] = useState(0)
//   const [currentProgressColor, setCurrentProgressColor] = useState(null)
//   const [progressWidth, setProgressWidth] = useState("0")
//   //Scroll y progress = vertical scroll progres between 0 - 1
//   const { scrollYProgress } = useViewportScroll()
//   const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })
//   const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

//   useEffect(
//     () =>
//       yRange.onChange(v => {
//         setCurrentPercent(Math.trunc(yRange.current))
//       }),
//     [yRange]
//   )

//   useEffect(() => {
//     console.log("Current", currentPercent)
//     setCurrentProgressColor(
//       currentPercent >= 90
//         ? "#CDFF00"
//         : currentPercent >= 45
//         ? "#31A9D5"
//         : currentPercent >= 20
//         ? "#F2BD1D"
//         : "#FF3B77"
//     )
//   }, [currentPercent])

//   {
//     /* <motion.div
//         style={{
//           background: currentProgressColor,
//           position: "fixed",
//           top: "0",
//           left: "0",
//           width: `${currentPercent}%`,
//           height: "20px",
//         }}
//       ></motion.div> */
//   }

//   return (
//     <>
//       <motion.div
//         style={{
//           display: "flex",
//           minHeight: "100vh",
//           background: "#F3F5F7",
//           justifyContent: "center",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
//         exit={{ opacity: 0, transition: { duration: 0.3 } }}
//       >
//         <Flex width={"90%"} bg="red" minHeight={"100vh"} position="relative">
//           <Box mt={10} mb={10} position="relative">
//             <Flex position={"relative"} align="center">
//               <IconButton
//                 position={"absolute"}
//                 aria-label="Go back"
//                 zIndex={50}
//                 variant="outline"
//                 icon={<Icon as={FiArrowLeft} />}
//               />
//               <motion.div
//                 whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
//                 style={{ position: "absolute", zIndex: 100 }}
//                 initial={{ opacity: 0 }}
//               >
//                 <IconButton
//                   colorScheme={"pink"}
//                   aria-label="Go back"
//                   variant="outline"
//                   icon={<Icon as={FiArrowLeft} />}
//                 />
//               </motion.div>
//             </Flex>
//           </Box>
//         </Flex>
//         <Image
//           borderRadius={"10px"}
//           boxSize={"100%"}
//           height={"260px"}
//           src={
//             "https://images.pexels.com/photos/6130307/pexels-photo-6130307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//           }
//           alt={"title"}
//           objectFit="cover"
//         />
//       </motion.div>
//     </>
//   )
// }

// export const pageQuery = graphql`
//   query ContentfuBlogPostBySlug($slug: String!) {
//     contentfulPost(slug: { eq: $slug }) {
//       author
//       createdAt(formatString: "LL")
//       bodyRichText {
//         raw
//       }
//       image {
//         gatsbyImageData(
//           width: 500
//           layout: FULL_WIDTH
//           cropFocus: CENTER
//           resizingBehavior: FILL
//         )
//       }
//       slug
//       title
//       avatar {
//         name
//         avatarImage {
//           gatsbyImageData(width: 50, layout: FULL_WIDTH)
//         }
//       }
//     }
//   }
// `
// {
/* <Grid w="100%" templateColumns="repeat(8, 1fr)" gap={3}>
        <GridItem colSpan={[8, 8, 6, 6]}>
          <Flex width="100%" minHeight="500px" borderRadius={"5px"}>
            <Flex flexDir={"column"} width="100%">
              <Box w="100%">
                <Image
                  borderTopLeftRadius={5}
                  borderTopRightRadius={5}
                  maxHeight="350px"
                  objectFit="cover"
                  objectPosition="top"
                  w="100%"
                  src={image.gatsbyImageData.images.fallback.src}
                  alt={slug}
                />
              </Box>
              <Box p={8} bg="white">
                <Flex align="center" justify="space-between" w="100%" mb={2}>
                  <Heading fontFamily={"Nunito"} fontWeight="900" size="lg">
                    {title}
                  </Heading>
                  <Box fontSize={"14px"} color="green">
                    <Provider apiKey="pt_67130c06f822ef90712c3ff7033b1f">
                      <LikeButton
                        theme={{ primary: "green" }}
                        id={slug}
                        hideCounterIfLessThan={3}
                        component={LikeButton.templates.Twitter}
                      />
                    </Provider>
                  </Box>

                  <CommentCount config={disqusConfig} placeholder={"..."} />
                </Flex>
                <Flex align="center" mb={10}>
                  <CardAvatar
                    author={name}
                    src={images.fallback.src}
                    date={createdAt}
                  />
                </Flex>
                {/* bodyRichText */

/* <Box fontFamily={"Nunito"}>
                  {renderRichText(bodyRichText, options)}
                </Box>
                <Box mt={20}>
                  <Disqus config={disqusConfig} />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem colSpan={2} display={["none", "none", "flex", "flex"]}>
          <Flex
            flexDir={["row", "row", "column", "column"]}
            w={"100%"}
            align="center"
          >
            <Flex
              w="100%"
              borderRadius="5px"
              p={5}
              bg="#ffffff"
              color={"fafafa"}
              ml={2}
              align="center"
              justify={"center"}
              flexDir={"column"}
            >
              <Avatar size="lg" src="https://bit.ly/kent-c-dodds" />
              <Heading
                mt={2}
                fontWeight={"900"}
                fontFamily={"Nunito"}
                size="md"
              >
                Soy Isa
              </Heading>
              <Text fontSize="sm" fontFamily={"Lora"}>
                y soy de Colombia
              </Text>
              <Link to="/about">
                <Button colorScheme="pink" variant="outline" size="sm" mt={5}>
                  Sobre mi
                </Button>
              </Link>
            </Flex>
            <Flex
              w="100%"
              mt={2}
              borderRadius="5px"
              p={5}
              bg="#ffffff"
              color={"fafafa"}
              maxH="250px"
              ml={2}
              align="center"
              justify={"center"}
              flexDir={"column"}
            >
              <Heading mb={2} fontWeight={"900"} fontFamily={"Lora"} size="md">
                Subscribete
              </Heading>
              <Input mb={2} placeholder="Enter your email..." />
              <Button size="sm" colorScheme="blackAlpha">
                Submit
              </Button>
            </Flex>
          </Flex>
        </GridItem>
      </Grid> */
