import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogin } from "../authService/authService"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form
      onSubmit={(e) => {
        
         handleLogin(e, email, password);
        
      }}
      >
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading color={"orange"}>Welcome Back</Heading>

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

          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forget Password?</Link>
          </Button>
          <div>
            
          </div>

          <Button colorScheme={"purple"} type={"submit"}>
            Log In
          </Button>

          <Text textAlign={"right"}>
            New User?{" "}
            <Button variant={"link"} colorScheme={"purple"} type="submit">
              <Link to={"/register"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
