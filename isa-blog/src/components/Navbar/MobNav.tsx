import React from "react";
import { navigate } from "gatsby";
import { Flex, Heading, IconButton, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavButtons from "./NavButtons";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";

interface MobNavProps {
  setOpen: (val: boolean) => void;
  open: boolean;
}

export default function MobNav({ setOpen, open }: MobNavProps) {
  return (
    <>
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
                  onClick={() => navigate(-1)}
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
            <NavButtons />
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
}
