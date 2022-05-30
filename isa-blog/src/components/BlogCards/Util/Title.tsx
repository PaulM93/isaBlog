import React from "react"
import { Heading } from "@chakra-ui/react"

interface TitleProps {
  whileHover: boolean
  title: string
  size: string
}

export default function Title({ whileHover, title, size }: TitleProps) {
  return (
    <Heading
      size={size}
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
  )
}
