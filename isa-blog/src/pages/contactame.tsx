import React, { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import {
  Heading,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Box,
  Button,
  Textarea,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react"
//Components
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"
import ChangePost from "../components/BlogPost/ChangePost"
import BlogPostWrapper from "../components/BlogPost/BlogPostWrapper"
import MotionWrapper from "../components/MotionComponents/MotionWrapper"

export default function Contact({ location }) {
  const [whileHover, setWhileHover] = useState<boolean>(false)
  const setHoverStatus = (val: boolean) => {
    setWhileHover(true)
  }
  const toast = useToast()
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })
  const handleValidation = () => {
    let fields = details
    let errors = {}
    let formIsValid = true

    const fieldArr = ["name", "message", "email"]
    //Name - Message
    fieldArr.map(i => {
      if (!fields[i]) {
        formIsValid = false
        return (errors[i] = true)
      }
    })

    setErrors(errors)
    return formIsValid
  }

  const [loading, setLoading] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if (handleValidation()) {
      axios
        .post("/send-email", details)
        .then(res => {
          console.log(res)
          setLoading(false)
          toast({
            title: res.data.message,
            status: "success",
            position: "bottom-left",
            isClosable: true,
          })
        })
        .catch(err => {
          console.log(err.response)
          setLoading(false)
          toast({
            title: err.response.data.message,
            status: "error",
            position: "bottom-left",
            isClosable: true,
          })
        })
    } else {
      setLoading(false)
    }
  }

  const handleChange = e => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    })
  }

  const [hovering, setHovering] = useState(false)
  const submitButton = (
    <motion.button
      onClick={e => handleSubmit(e)}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <Button
        style={{
          display: "flex",
          padding: "15px 40px 15px 40px",
          borderRadius: "5px",
          color: "#EDE8FD",
          fontWeight: "500",
          background: "#CF2205",
        }}
        isLoading={loading}
        loadingText="Submitting"
      >
        Send it{" "}
        <motion.p
          initial={{ rotate: 0 }}
          animate={{ rotate: hovering ? [0, 90, 0] : 0 }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginLeft: "5px" }}
        >
          👋
        </motion.p>
      </Button>
    </motion.button>
  )
  //background is the image
  //when we hover over it it shifts
  //absolute position on top they whit eform

  return (
    <>
      <Navbar location={location} />
      <Flex
        background={"#F3F5F7"}
        width={"100%"}
        height="100%"
        justify={"center"}
        pt={90}
      >
        <Flex
          width={["90%", "90%", "90%", "75%"]}
          justify={"center"}
          height={"fit-content"}
          paddingTop="30px"
          paddingBottom={"100px"}
        >
          <Box
            minWidth={["0%", "0%", "15%", "20%"]}
            display={["none", "none", "block", "block"]}
          >
            <ChangePost side={false} url={""} displayButton={false} />
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            whileHover={{
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            }}
            onHoverStart={() => setWhileHover(true)}
            onHoverEnd={() => setWhileHover(false)}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0.4em",
              width: "100%",
              maxHeight: "100%",
              minHeight: "100%",
              borderRadius: "10px",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundImage:
                'url("https://images.pexels.com/photos/7120362/pexels-photo-7120362.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          >
            <Flex
              flexDir="column"
              p={20}
              borderRadius="10px"
              alignItems="center"
              bg="#ffffff"
              textAlign={"center"}
            >
              <Flex align="center">
                {/* <Subtitle sentence={"Thanks for taking the time to reach out."} /> */}
              </Flex>
              <Heading size="lg" mb={10} textAlign="center" color="primaryMute">
                How can I help you today?
              </Heading>
              <Flex mb={5} spacing={4} w="100%">
                <FormControl
                  htmlFor="name"
                  isRequired
                  isInvalid={errors.name}
                  mr={4}
                >
                  <FormLabel color="primaryMute" htmlFor="email">
                    Name
                  </FormLabel>
                  <Input
                    variant="filled"
                    focusBorderColor="primary"
                    errorBorderColor="red.300"
                    // borderColor={"whiteAlpha.400"}
                    color="secondary"
                    size="lg"
                    placeholder="Your name..."
                    onChange={handleChange}
                    id="name"
                    type="text"
                  />
                  {errors.name ? (
                    <FormErrorMessage color="red.300" size="sm">
                      Your name is required.
                    </FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
                <FormControl
                  htmlFor="email"
                  isRequired
                  isInvalid={errors.email}
                >
                  <FormLabel color="primaryMute" htmlFor="email">
                    Email address
                  </FormLabel>
                  <Input
                    variant="filled"
                    focusBorderColor="primary"
                    errorBorderColor="red.300"
                    borderColor={"whiteAlpha.400"}
                    color="secondary"
                    size="lg"
                    placeholder="Your Email..."
                    onChange={handleChange}
                    id="email"
                    type="email"
                  />
                  {errors.email ? (
                    <FormErrorMessage color="red.300">
                      Your email is required.
                    </FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
              </Flex>
              <FormControl isInvalid={errors.message} mb={10}>
                <Textarea
                  variant="filled"
                  resize="vertical"
                  focusBorderColor="primary"
                  errorBorderColor="red.300"
                  color="secondary"
                  borderColor={"whiteAlpha.400"}
                  size="lg"
                  onChange={handleChange}
                  id="message"
                  placeholder="Send me a message!"
                />
                {errors.message ? (
                  <FormErrorMessage color="red.300">
                    A message is required :)
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              {submitButton}
            </Flex>
          </motion.div>
          <Box
            minWidth={["0%", "0%", "15%", "20%"]}
            display={["none", "none", "block", "block"]}
          >
            <ChangePost side={true} url={""} displayButton={false} />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
