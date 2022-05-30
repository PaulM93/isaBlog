import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useViewportScroll, useSpring, useTransform } from "framer-motion";
import {
  Grid,
  Box,
  Flex,
  Heading,
  Center,
  Text,
  Avatar,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import SocialIcons from "../components/Navbar/SocialIcons";
import SmallCard from "../components/BlogCards/SmallCard";
import BigCard from "../components/BlogCards/BigCard";
// import CardButtons from "../components/CardButtons"
import Footer from "../components/Footer";
import Banner from "../components/Banner";
// import FloatingNavbar from "../components/Navbars/FloatingNavbar"
import Navbar from "../components/Navbar/Navbar";
import MotionWrapper from "../components/MotionComponents/MotionWrapper";
// import MotionHeader from "../components/MotionComponents/MotionHeader"
import AboutCard from "../components/BlogCards/AboutCard";

interface BlogIndexProps {
  data: { allContentfulPost: { edges: [{}] } };
}

const BlogIndex = (props) => {
  const {
    location,
    data: {
      allContentfulPost: { edges },
    },
  } = props;
  const blogPosts: [{}] = edges;

  const [currentPercent, setCurrentPercent] = useState(100);
  const [currentProgressColor, setCurrentProgressColor] = useState(null);
  const [progressHeight, setProgressHeight] = useState(70);
  //Scroll y progress = vertical scroll progres between 0 - 1
  const { scrollYProgress } = useViewportScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  console.log("Current", currentPercent);

  const [imagePosition, setImagePosition] = useState(-15);
  const [divPosition, setDivPosition] = useState(0);

  const [shouldShowActions, setShouldShowActions] = useState(false);
  useEffect(
    () =>
      yRange.onChange((v) => {
        //Can I get pixels?
        console.log("Vssdf", v);
        console.log("yRange", yRange.current);
        setCurrentPercent(100 - Math.trunc(yRange.current));
        setDivPosition(-Math.trunc(yRange.current * 2));
        setImagePosition(imagePosition - Math.trunc(yRange.current * 2));
        if (Math.trunc(yRange.current) > 15) {
          setShouldShowActions(true);
        } else {
          setShouldShowActions(false);
        }
        // if (Math.trunc(yRange.current) < 66.66) {
        //   setShouldShowActions(false)
        // } else {
        //   setShouldShowActions(true)
        // }
      }),
    [yRange]
  );

  const cardData = [
    {
      src: "https://images.pexels.com/photos/6130307/pexels-photo-6130307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Por que amo Mexico",
      hashtags: [],
    },
    {
      src: "https://images.pexels.com/photos/10060128/pexels-photo-10060128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "El Agua de mi Alma",
      hashtags: [],
    },
    {
      src: "https://images.pexels.com/photos/8608674/pexels-photo-8608674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "La Ciudad de Vistas",
      hashtags: [],
    },
    {
      src: "https://images.pexels.com/photos/2388639/pexels-photo-2388639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Edificio de alla",
      hashtags: [],
    },
  ];
  const smallCardMarkup = cardData.map((card) => (
    <GridItem>
      <SmallCard src={card.src} title={card.title} hashtags={[]} />
    </GridItem>
  ));

  return (
    <>
      <Layout location={location}>
        <MotionWrapper>
          <Flex width="100%" mt={5} mb={10} justify="center" height="100%">
            <Grid
              w="100%"
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={9}
            >
              <GridItem
                display={["block", "block", "none", "block"]}
                maxHeight={"100%"}
              >
                <BigCard />
              </GridItem>
              <GridItem minHeight={"100%"} maxHeight="100%" width={"100%"}>
                <Grid
                  templateColumns={["", "", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
                  templateRows={["", "", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
                  gap={6}
                >
                  {smallCardMarkup}
                </Grid>
              </GridItem>
            </Grid>
          </Flex>
        </MotionWrapper>
        {/* Banner */}
        <Banner />
      </Layout>
    </>
  );
};

export default BlogIndex;

export const blogPosts = graphql`
  query BlogPosts {
    allContentfulPost {
      edges {
        node {
          title
          slug
          createdAt(formatString: "LL")
          author
          image {
            gatsbyImageData(width: 300, resizingBehavior: FILL)
          }
          avatar {
            avatarImage {
              gatsbyImageData(width: 30, resizingBehavior: FILL)
            }
          }
        }
      }
    }
  }
`;
{
  /* Second Section  */
}
{
  /* <Box maxHeight={"fit-content"} minHeight="fit-content">
          <MotionWrapper>
            <Flex
              width="100%"
              mt={5}
              mb={10}
              flexDir={"column"}
              align="center"
              height="100%"
              // bg="blue"
            >
              <MotionHeader />
              <Grid
                w={["90%", "90%", "95%", "75%"]}
                templateColumns={["", "", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
                gap={9}
              >
                <GridItem minHeight={"100%"} maxHeight="100%">
                  <Grid
                    // bg="violet"
                    templateColumns={[
                      "",
                      "",
                      "repeat(2, 1fr)",
                      "repeat(2, 1fr)",
                    ]}
                    templateRows={["", "", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
                    gap={6}
                  >
                    {smallCardMarkup}
                  </Grid>
                </GridItem>
                <GridItem maxHeight={"100%"}>
                  <BigCard />
                </GridItem>
              </Grid>
            </Flex>
          </MotionWrapper>
        </Box> */
}
{
  /* This remains the navBar */
}
