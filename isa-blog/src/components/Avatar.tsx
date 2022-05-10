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
      <Avatar size="md" src={src} />
      <Box ml={2}>
        <Text fontFamily={"Nunito"} fontWeight="700" fontSize={"sm"}>
          {author}
        </Text>
        <Text fontFamily={"Nunito"} fontSize={"sm"} textTransform="capitalize">
          {date}
        </Text>
      </Box>
    </Flex>
  )
}
