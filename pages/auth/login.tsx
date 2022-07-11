import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleEmailInput = (event: any) => {
    setEmail(event.target.value);
  };
  const HandlePasswordInput = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    signIn("credentials", {
      email,
      password,

      // The page where you want to redirect to after a
      // successful login
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"2xl"} textAlign={"center"} fontFamily={"Roboto"}>
          Sign in to your account
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4} width={{ base: "64", sm: "80" }}>
            <FormControl id="email">
              <FormLabel
                textColor={"#1f2937"}
                fontFamily={"Inter"}
                fontSize={"sm"}
                fontWeight={"bold"}
              >
                Email address
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                _placeholder={{
                  fontFamily: "Inter",
                  opacity: 1,
                  color: "gray.500",
                  fontWeight: "regular",
                }}
                onInput={HandleEmailInput}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel
                textColor={"#1f2937"}
                fontFamily={"Inter"}
                fontSize={"sm"}
                fontWeight={"bold"}
              >
                Password
              </FormLabel>
              <Input
                type="password"
                placeholder="Enter password"
                _placeholder={{
                  fontFamily: "Inter",
                  opacity: 1,
                  color: "gray.500",
                  fontWeight: "regular",
                }}
                onInput={HandlePasswordInput}
              />
            </FormControl>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleLogin}
            >
              Sign in
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
