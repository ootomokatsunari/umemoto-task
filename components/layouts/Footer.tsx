import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      bg="blue.500"
      color="white"
      borderTop="4px solid #FF0080"
      px={4}
      py={8}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        maxWidth="1200px"
        mx="auto"
      >
        <Text fontSize="md">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </Text>
        <NextLink href="/">
          <Link fontSize="md" mt={[4, 0]} ml={[0, 4]}>
            Top
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Footer;
