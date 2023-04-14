import React from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Header: React.FC = () => {
return (
<Flex
   as="nav"
   align="center"
   justify="space-between"
   wrap="wrap"
   padding="1.5rem"
   bg="blue.500"
   color="white"
 >
<Flex align="center" mr={5}>
<NextLink href="/">
<Link>
<Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
My App
</Heading>
</Link>
</NextLink>
</Flex>
<Box display={{ base: "block", md: "none" }} onClick={() => {}}>
    <svg
      fill="white"
      width="12px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path
        fillRule="evenodd"
        d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  </Box>

  <Box
    display={{ base: "none", md: "block" }}
    flexBasis="auto"
    flexGrow={1}
  >
    <Flex align="center" justify="flex-end">
      <Box mr={6}>
        <NextLink href="/about">
          <Link>About</Link>
        </NextLink>
      </Box>
    </Flex>
  </Box>
</Flex>
);
};
export default Header;