import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { Image, Flex, Heading } from "@chakra-ui/react"
//Component
import Tags from "./Util/Tags"
import MotionLayout from "./MotionLayout"
import Title from "./Util/Title"

interface SmallCardProps {
  src: string
  title: string
  hashtags: []
}

export default function SmallCard({ src, title, hashtags }: SmallCardProps) {
  const [whileHover, setWhileHover] = useState<boolean>(false)

  const setHoverStatus = (val: boolean) => {
    setWhileHover(val)
  }

  return (
    <MotionLayout setHoverStatus={setHoverStatus} cardType={"sm"}>
      <Image
        borderRadius={"10px"}
        boxSize={"100%"}
        height={"260px"}
        src={src}
        alt={title}
        objectFit="cover"
      />
      <Flex p={4} flexDir="column" align={"center"} minH="100px">
        <Title whileHover={whileHover} title={title} size={"md"} />
        <Tags whileHover={whileHover} />
      </Flex>
    </MotionLayout>
  )
}
