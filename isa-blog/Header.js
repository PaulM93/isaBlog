import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
//Components
import CardButtons from "./CardButtons"

export default function Header() {
  //Static Query
  // const data = useStaticQuery(graphql`
  //   query SiteTitle {
  //     site {
  //       siteMetadata {
  //         author {
  //           name
  //         }
  //         description
  //         title
  //       }
  //     }
  //   }
  // `)

  // const { title } = data.site.siteMetadata.title
  // console.log(title)

  return (
    <>
      <Box mb={10} position={"static"}>
        <Text m={0} fontWeight="700" size="xl" fontFamily={"nunito"}>
          Un Cafe con Isa ☕
        </Text>
        <Heading fontFamily={"lora"} fontWeight="700" m={0} size="xl">
          Un Blog de viajes, comida y libros
        </Heading>
      </Box>
      <CardButtons />
    </>
  )
}
