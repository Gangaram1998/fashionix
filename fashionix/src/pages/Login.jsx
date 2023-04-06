import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  FormControl,
  Center,
  useToast,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {Footer} from "../Components/Footer";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  return (
    <Box color={"black"} bg={"white"}>
      <Box
        mt={250}
        ml="12%"
        style={{ fontFamily: "Neue-Helvetica, Helvetica, Arial, sans-serif" }}
      >
        <Flex gap={200}>
          <Box width={"30%"} textAlign={"start"}>
            <Text fontSize="18px" fontWeight={600} color={"black"} >
              Log in here?
            </Text>
            <Box>
              <FormControl isRequired>
                <label>Email</label>
                <Input
                marginTop={"-10px"}
                  border={"none"}
                  // borderRadius="10px"
                  borderColor="black"
                  borderBottom="2px"
                  textDecoration="none"
                  name="email"
                  type="text"
                  placeholder="E-MAIL"
                  mt={"25px"}
                  alignItems="start"
                  padding="0px"
                  fontSize="16px"
                  color={"black"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  textAlign={"center"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <Input
                  fontSize="16px"
                  border="none"
                  textAlign={"center"}
                  // borderRadius="10px"
                  borderColor="black"
                  borderBottom="2px"
                  textDecoration="none"
                  name="password"
                  type="password"
                  // placeholder="PASSWORD"
                  placeholder='PASSWORD'
                  mt={"25px"}
                  alignItems="start"
                  padding="0px"
                  value={password}
                  color={"black"}
                  
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box mt="15%">
              <Button
                type="submit"
                w={"100%"}
                // borderRadius="10px"
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                // onClick={singinUser}
              >
                LOG IN
              </Button>
              <Text fontSize="10px" fontWeight="600" mt="10%">
                HAVE YOU FORGOTTEN YOUR PASSWORD?
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Box>

  )
}
