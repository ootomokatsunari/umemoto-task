import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex minH="100vh" alignItems="center">
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mx="auto"
        my={10}
        boxShadow="md"
        bg="white"
      >
        <Box bg="gray.100" h="200px">
          <Image src="./images/profile.jpg" alt="プロフィール画像" h="100%" />
        </Box>
        <Box p={6}>
          <Heading as="h1" size="xl" mb={4}>
            自己紹介
          </Heading>
          <Text fontSize="xl" mb={8}>
            こんにちは、大供克成と申します。
          </Text>
          <Text fontSize="lg" lineHeight="tall">
            私はWeb開発に興味を持っており、現在はフロントエンドエンジニアとして活躍しています。
            以前は別の業界に勤めており、Web開発の経験は浅いですが、日々勉強を重ねてスキルアップに励んでいます。
          </Text>
          <Text fontSize="lg" lineHeight="tall" mt={8}>
            このページでは、私が開発したプロジェクトやスキルについて紹介しています。
            ぜひご覧いただければ幸いです。
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
