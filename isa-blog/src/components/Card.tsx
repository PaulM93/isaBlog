import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { Image, Box, Flex, Heading, Text, Icon, HStack } from "@chakra-ui/react"
import { FiClock } from "react-icons/fi"
//Components
import Avatar from "./Avatar"

interface CardProps {
  post: {
    node: {
      title: string
      subtitle: string
      author: string
      createdAt: string
      slug: string
      image: {
        gatsbyImageData: {
          images: {}
        }
      }
      avatar: {
        gatsbyImageData: {
          images: {}
        }
      }
    }
  }
}

export default function Card({
  post: {
    node: { title, subtitle, author, createdAt, slug, avatar, image },
  },
}: CardProps) {
  const [whileHover, setWhileHover] = useState<Boolean>(false)
  const thumbImage = image.gatsbyImageData.images.fallback.src
  const avatarImage = avatar.avatarImage.gatsbyImageData.images.fallback.src
  console.log(avatarImage)

  // const readTime = (
  //   <Flex align="center">
  //     <Icon as={FiClock} fontSize="xs" />
  //     <Text fontSize={"xs"} ml={1}>
  //       {timeToRead} min read
  //     </Text>
  //   </Flex>
  // )

  // const hashTagMarkup = (
  //   <Box>
  //     <HStack>
  //       {hashtags
  //         ? hashtags.map(i => (
  //             <Text fontFamily={"lora"} fontSize="sm" key={i}>
  //               #{i}
  //             </Text>
  //           ))
  //         : null}
  //     </HStack>
  //   </Box>
  // )

  return (
    <motion.div
      onHoverStart={() => setWhileHover(true)}
      onHoverEnd={() => setWhileHover(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "10px",
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          type: "spring",
          duration: 0.4,
        },
        color: "#B83280",
        boxShadow: "rgba(149, 157, 165, 0.4) 0px 8px 24px",
        borderRadius: "10px 20px 23px 15px",
      }}
    >
      <Link to={`${slug}`}>
        <Flex
          cursor={"pointer"}
          bg="white"
          h="400px"
          flexDir="column"
          minWidth="100%"
        >
          <Box w="100%">
            <Image
              borderTopLeftRadius={5}
              borderTopRightRadius={5}
              h="200px"
              objectFit="cover"
              objectPosition="top"
              w="100%"
              src={thumbImage}
              alt="Dan Abramov"
            />
          </Box>
          <Flex h="100%" position="relative">
            <Flex w={"5px"} h="100%" align="flex-end" position="absolute">
              <motion.div
                style={{
                  width: "100%",
                  border: "none",
                  height: "0%",
                  background: "#B83280",
                  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                }}
                animate={{
                  height: whileHover ? "100%" : "0%",
                  transition: { duration: 1, delay: 0.1 },
                }}
              />
            </Flex>
            <Flex p={5} flexDir="column" height="100%" justify="space-between">
              <Box>
                <Avatar src={avatarImage} author={author} date={createdAt} />
                <Box mt={4}>
                  <Heading
                    fontFamily={"Nunito"}
                    fontWeight="900"
                    size="md"
                    mb={1}
                  >
                    {title}
                  </Heading>
                  {/* {readTime} */}
                </Box>
              </Box>
              {/* Hashtags  */}
              {/* {hashTagMarkup} */}
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </motion.div>
  )
}
