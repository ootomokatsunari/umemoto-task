import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer: React.FC = () => {
return (
<Box
   as="footer"
   bg="blue.500"
   color="white"
   borderTop="4px solid #FF0080"
 >
<Flex
alignItems="center"
justifyContent="space-between"
flexDirection={["column", "row"]}
px={4}
py={4}
maxWidth="1200px"
mx="auto"
>
<Text fontSize="md">
© {new Date().getFullYear()} My Website. All rights reserved.
</Text>
<NextLink href="pages/about">
<Link fontSize="md" ml={[0, 4]}>
Top
</Link>
</NextLink>
</Flex>
</Box>
);
};

export default Footer;