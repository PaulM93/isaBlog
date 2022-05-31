import React, { useState, useEffect } from "react";
import { container, hiddenContainer } from "./Navbar.module.css";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";
//Components
import MobNav from "./MobNav";
import SocialButtons from "./SocialIcons";
import NavButtons from "./NavButtons";

export default function Navbar(props) {
  //Navbar animations
  const [currentPercent, setCurrentPercent] = useState(0);
  //Scroll y progress = vertical scroll progres between 0 - 1
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(yRange.current));
      }),
    [yRange]
  );
  const [shouldShowActions, setShouldShowActions] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > 0;
      setShouldShowActions(isScrollingDown);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  //Mob Props
  const [open, setOpen] = useState(false);

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
        {/* Only show on blog pages  */}
        {props.location.pathname !== "/" && (
          <motion.div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundImage:
                'url("https://images.pexels.com/photos/7120362/pexels-photo-7120362.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              position: "fixed",
              top: "0",
              left: "0",
              width: `${currentPercent}%`,
              height: "10px",
            }}
          ></motion.div>
        )}

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

        {/* MobNav  */}
        <MobNav setOpen={setOpen} open={open} />
      </motion.div>
    </>
  );
}
