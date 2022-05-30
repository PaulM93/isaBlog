import React from "react"
import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

interface AvatarProps {
  author: string
  src: string
  date: string
}

export default function CardAvatar({ author, src, date }: AvatarProps) {
  return (
    <Flex align="center">
      {" "}
      <Avatar size="sm" src={src} />
      <Box ml={2}>
        <Text fontFamily={"Nunito"} fontWeight="700" fontSize={"xs"}>
          {author}
        </Text>
        <Text fontFamily={"Nunito"} fontSize={"xs"} textTransform="capitalize">
          {date}
        </Text>
      </Box>
    </Flex>
  )
}
