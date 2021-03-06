import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const HandleUsernameInput = (event: any) => {
    setUsername(event?.target.value);
  };
  const HandleEmailInput = (event: any) => {
    setEmail(event?.target.value);
  };
  const HandlePasswordInput = (event: any) => {
    setPassword(event?.target.value);
  };
  const HandleRetypePasswordInput = async () => {};

  const sendRegisterForm = async () => {
    await axios.post("http://localhost:8080/register", {
      email: email,
      password: password,
      username: username,
    });
  };

  const FieldTemplates = [
    {
      id: "username",
      placeholder: "Enter your name",
      type: "text",
      field: "User name",
      name: "username",
      InputFunction: HandleUsernameInput,
    },
    {
      id: "email",
      placeholder: "Enter your email",
      type: "email",
      field: "Email address",
      name: "email",
      InputFunction: HandleEmailInput,
    },
    {
      id: "password",
      placeholder: "Enter new password",
      type: "password",
      field: "Password",
      name: "password",
      InputFunction: HandlePasswordInput,
    },
    {
      id: "retypePassword",
      placeholder: "Retype password",
      type: "password",
      field: "Retype Password",
      name: "username",
      InputFunction: HandleRetypePasswordInput,
    },
  ];

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.100"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={4} px={6}>
        <Heading fontSize={"2xl"} textAlign={"center"} fontFamily={"Roboto"}>
          Sign up to create account
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4} width={{ base: "64", sm: "80" }}>
            {FieldTemplates.map((value, key) => (
              <FormControl id={value.id} key={value.id} isRequired>
                <FormLabel
                  textColor={"#1f2937"}
                  fontFamily={"Inter"}
                  fontSize={"sm"}
                  fontWeight={"bold"}
                >
                  {value.field}
                </FormLabel>
                <Input
                  name={value.name}
                  onInput={value.InputFunction}
                  type={value.type}
                  fontSize={"md"}
                  placeholder={value.placeholder}
                  _placeholder={{
                    fontFamily: "Inter",
                    opacity: 1,
                    color: "gray.500",
                    fontWeight: "regular",
                  }}
                />
              </FormControl>
            ))}
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={sendRegisterForm}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} href="/">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
