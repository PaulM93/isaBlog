import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
//Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import SocialButtons from "../components/Navbar/SocialIcons";
//ChakraUI
import {
  Heading,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Textarea,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function Contact({ location }) {
  const toast = useToast();
  const [whileHover, setWhileHover] = useState(false);
  const [hovering, setHovering] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const handleValidation = () => {
    let fields = details;
    let errors = {};
    let formIsValid = true;

    const fieldArr = ["name", "message", "email"];
    //Name - Message
    fieldArr.map((i) => {
      if (!fields[i]) {
        formIsValid = false;
        return (errors[i] = true);
      }
    });

    setErrors(errors);
    return formIsValid;
  };

  //FormSpree
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const formValues = details;
  const [state, handleSubmit] = useForm("xyyoolkq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  console.log("State", state);

  //Handle errors on the client i.e. missing email etc
  //Set loading basd on useForm state
  //Do the same for the errors

  //Handle field changes
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <Navbar location={location} />
      {/* Toast  */}
      {state.succeeded && toast({ title: "Message Sent", status: "success" })}
      <Flex
        background={"#F3F5F7"}
        width={"100%"}
        height="100%"
        justify={"center"}
        pt={90}
      >
        <Flex
          width={["90%", "90%", "90%", "50%"]}
          justify={"center"}
          height={"fit-content"}
          paddingTop="30px"
          paddingBottom={"100px"}
        >
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
              padding: "0.2em",
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
              p={[8, 8, 20, 20]}
              borderRadius="10px"
              alignItems="center"
              bg="#ffffff"
              textAlign={"center"}
            >
              <Flex align="center">
                {/* <Subtitle sentence={"Thanks for taking the time to reach out."} /> */}
              </Flex>
              <Heading size="lg" mb={4} textAlign="center">
                ¿Quieres Trabajar Conmigo?
              </Heading>
              <Text size="md" mb={12} textAlign="center">
                Envíame mensaje
              </Text>
              <form
                onSubmit={handleSubmit}
                style={{ width: "100%", marginBottom: "50px" }}
              >
                <Flex
                  mb={5}
                  w="100%"
                  flexDir={["column", "column", "row", "row"]}
                >
                  <FormControl
                    isRequired
                    isInvalid={errors.name}
                    mr={4}
                    mb={[2, 2, 0, 0]}
                  >
                    <FormLabel color="primaryMute" htmlFor="email">
                      Nombre
                    </FormLabel>
                    <Input
                      variant="filled"
                      focusBorderColor="primary"
                      errorBorderColor="red.300"
                      color="secondary"
                      size="lg"
                      placeholder="Tu nombre..."
                      onChange={handleChange}
                      id="name"
                      type="text"
                    />
                    {errors.name ? (
                      <FormErrorMessage color="red.300" size="sm">
                        Tu nombre es requerido
                      </FormErrorMessage>
                    ) : (
                      ""
                    )}
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={errors.email}
                    mb={[2, 2, 0, 0]}
                  >
                    <FormLabel color="primaryMute" htmlFor="email">
                      Correo Electrónico
                    </FormLabel>
                    <Input
                      variant="filled"
                      focusBorderColor="primary"
                      errorBorderColor="red.300"
                      color="secondary"
                      size="lg"
                      placeholder="Tu correo electrónico..."
                      onChange={handleChange}
                      id="email"
                      type="email"
                      name="email"
                    />
                    {errors.email ? (
                      <FormErrorMessage color="red.300" size="sm">
                        Tu nombre es requerido.
                      </FormErrorMessage>
                    ) : (
                      ""
                    )}
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
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
                    name="message"
                    placeholder="Send me a message!"
                  />
                  {errors.message ? (
                    <FormErrorMessage color="red.300">
                      Se requiere un mensaje :)
                    </FormErrorMessage>
                  ) : (
                    ""
                  )}
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </FormControl>
                <motion.button
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
                    loadingText="Submitting"
                  >
                    <button onClick={handleSubmit}>Enviar </button>
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
              </form>
              <Flex flexDir={"column"}>
                <Text size="md" mb={10} textAlign="center">
                  O envíame un dm
                </Text>
                <SocialButtons />
              </Flex>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
