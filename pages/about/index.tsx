import React from "react";
import App from "next/app";
import { Box, Flex, Heading } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Flex minH="100vh">
      <Box
  maxW="sm"
  borderWidth="1px"
  borderRadius="lg"
  overflow="hidden"
  mx="auto"
  my={10}
>
<Heading as="h1" size="xl" my={12} mx={8}>
          自己紹介
        </Heading>
        <Heading>こんにちわ</Heading>
        <Heading>大供克成です！</Heading>
        <Heading as="h1" size="xl" my={8} mx={4}>
          西野カナとパンパンやってたらなってもうた二児の母
        </Heading>

  <img src="/profile.jpg" alt="プロフィール画像" />
</Box>
        
    </Flex>
  );
};



export default About;
