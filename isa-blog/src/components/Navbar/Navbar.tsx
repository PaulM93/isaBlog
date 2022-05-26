import React, { useState, useEffect } from "react"
import { container, hiddenContainer } from "./NavBar.module.css"
import { motion } from "framer-motion"
import { Flex, Heading, IconButton, Button, HStack } from "@chakra-ui/react"
//Components
import SocialButtons from "./SocialIcons"
import NavButtons from "./NavButtons"
import { FiChevronDown, FiChevronLeft } from "react-icons/fi"

interface NavBarProps {
  page: string
}

export default function NavBar({ page }: NavBarProps) {
  // const { colorMode, toggleColorMode } = useColorMode();

  const [shouldShowActions, setShouldShowActions] = useState(false)
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingDown = yPos > 0
      setShouldShowActions(isScrollingDown)
    }
    window.addEventListener("scroll", handleScroll, false)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [])

  //Mob
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        className={container}
        animate={{ boxShadow: open ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "" }}
      >
        {/* HiddenContainer - animates opacity on scroll */}
        <motion.div
          className={hiddenContainer}
          initial={{ opacity: 0 }}
          animate={{
            opacity: shouldShowActions ? 1 : 0,
            transition: {
              duration: 0.1,
            },
          }}
        />

        {/* Top bar  */}
        <motion.div
          style={{
            height: "10px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundImage:
              'url("https://images.pexels.com/photos/7120362/pexels-photo-7120362.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
          initial={{ y: "-10px", height: "10px", width: "100%" }}
          animate={{
            y: "0px",
            height: shouldShowActions ? "0px" : "10px",
            transition: {
              duration: 0.5,
            },
          }}
        />

        <Flex
          display={["none", "none", "flex", "flex"]}
          w={["90%", "90%", "75%", "75%"]}
          align="center"
          justifyContent="space-between"
          minH={"80px"}
        >
          {/* Heading  */}
          <motion.div
            transition={{ delay: 0.2, duration: 1 }}
            initial={{ x: "-100vh" }} //Initial defines the initial position of an element
            animate={{ x: 0 }}
          >
            <Heading
              zIndex={900}
              mr={5}
              size="md"
              color="secondary"
              fontWeight={"700"}
              fontFamily={"Nunito"}
            >
              Un Cafe con Isa
            </Heading>
          </motion.div>

          {/* Navbuttons  */}
          <motion.div
            initial={{ opacity: 0 }} //Initial defines the initial position of an element
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <NavButtons />
          </motion.div>

          {/* SocialButtons  */}
          <motion.div
            transition={{ delay: 0.2, duration: 1 }}
            initial={{ x: "100vh" }} //Initial defines the initial position of an element
            animate={{ x: 0 }}
          >
            <Flex align="center">
              <SocialButtons
                shouldShowActions={shouldShowActions}
                type={"nav"}
              />
            </Flex>
          </motion.div>
        </Flex>

        {/* Mob Nav  */}
        <Flex
          w="100%"
          justify={"center"}
          pb={4}
          position="relative"
          display={["flex", "flex", "none", "none"]}
        >
          <motion.div
            style={{
              minHeight: "100%",
              position: "absolute",
              width: "100%",
              background: "white",
              zIndex: 500,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0, transition: { duration: 0.2 } }}
          />
          <Flex flexDir={"column"} w="90%" zIndex={999}>
            <Flex
              justify={"space-between"}
              minH={"70px"}
              pt={"10px"}
              align={"center"}
            >
              <motion.div
                transition={{ delay: 0.2, duration: 1 }}
                initial={{ x: "-100vh" }} //Initial defines the initial position of an element
                animate={{ x: 0 }}
              >
                <Heading
                  zIndex={900}
                  mr={5}
                  size="md"
                  color="secondary"
                  fontWeight={"700"}
                  fontFamily={"Nunito"}
                >
                  Un Cafe con Isa
                </Heading>
              </motion.div>
              {/* Menu Button  */}
              <HStack>
                <motion.button
                  animate={{
                    rotate: open ? 360 : 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  <IconButton
                    isRound={open ? false : true}
                    variant={"outline"}
                    onClick={() => setOpen(!open)}
                    icon={<FiChevronLeft />}
                    aria-label="open menu"
                  />
                </motion.button>
                <motion.button
                  animate={{
                    rotate: open ? 180 : 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  <IconButton
                    isRound={open ? false : true}
                    colorScheme={"purple"}
                    variant={open ? "solid" : "outline"}
                    onClick={() => setOpen(!open)}
                    icon={<FiChevronDown />}
                    aria-label="open menu"
                  />
                </motion.button>
              </HStack>
            </Flex>
            <motion.div
              initial={{
                height: "0px",
                opacity: 0,
                marginTop: "0px",
              }}
              animate={{
                marginTop: open ? "10px" : "0px",
                height: open ? "fit-content" : "0px",
                opacity: open ? 1 : 0,
                transition: { duration: 0.2 },
              }}
              style={{
                width: "100%",
                height: "0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <HStack pt={4}>
                <Button size={"sm"} variant={"outline"}>
                  Inicio
                </Button>
                <Button size={"sm"} variant={"outline"}>
                  Sobre mi
                </Button>
                <Button size={"sm"} variant={"outline"}>
                  Contactame
                </Button>
              </HStack>
            </motion.div>
          </Flex>
        </Flex>
      </motion.div>
    </>
  )
}
