import React from "react"
import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react"
//Components
import SocialIcons from "./SocialIcons"

const Footer: React.FC = () => {
  return (
    <>
      <Flex height="800px" align="flex-end">
        <Flex
          position="relative"
          width="100%"
          background="#C8A284"
          minH="500px"
          maxH="500px"
          justify={"center"}
        >
          <Grid
            position={"absolute"}
            top={"-40%"}
            height="400px"
            p={5}
            borderRadius={20}
            background="#FAF3ED"
            templateColumns="repeat(4, 1fr)"
            gap={4}
            w="75%"
          >
            <GridItem>
              <Image
                src="https://images.pexels.com/photos/8090376/pexels-photo-8090376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Dan Abramov"
                objectFit="cover"
              />
            </GridItem>
            <GridItem>
              <Image
                src="https://images.pexels.com/photos/8090376/pexels-photo-8090376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Dan Abramov"
                objectFit="cover"
              />
            </GridItem>
            <GridItem>
              <Image
                src="https://images.pexels.com/photos/8090376/pexels-photo-8090376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Dan Abramov"
                objectFit="cover"
              />
            </GridItem>
            <GridItem>
              <Image
                src="https://images.pexels.com/photos/8090376/pexels-photo-8090376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Dan Abramov"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
          <Flex pt="240px" align="center" width="100%" flexDir={"column"}>
            <Heading size="md" color="#fafafa" mb={10}>
              Un Cafe con Isa
            </Heading>
            <HStack>
              <Button>Home</Button>
              <Button>About me</Button>
              <Button>Comida</Button>
            </HStack>
            <Divider w="75%" mt={10} />
            <Flex w="75%" justify={"space-between"} align="center" mt={5}>
              <Text color="#fafafa">Copyright @uncafeconIsa</Text>
              <SocialIcons />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
export default Footer
