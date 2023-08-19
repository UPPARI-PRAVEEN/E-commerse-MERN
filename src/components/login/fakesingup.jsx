import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  handleRegister } from "../../../src/components/authService/authService";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form
      onSubmit={(e) => {
         handleRegister(
            e,
            name,
           
            email,
            password,
           
          )
      }}
      >
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>Login</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />

          <Input
            placeholder={"Name"}
            type={"text"}
            required
            focusBorderColor={"purple.500"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={"Email"}
            type={"email"}
            required
            focusBorderColor={"purple.500"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            required
            focusBorderColor={"purple.500"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button colorScheme={"purple"} type={"submit"}>
            Sign Up
          </Button>

          <Text textAlign={"right"}>
            Already Signed Up?{" "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/login"}>Login In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
