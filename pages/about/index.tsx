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
<Box bg="gray.10" h="500px">
<Image src="./images/profile.jpg" alt="プロフィール画像" h="100%" />
</Box>
<Box p={6}>
<Heading as="h1" size="xl" mb={4}>
かっくんの自己紹介
</Heading>
<Text fontSize="xl" mb={8}>
こんにちは、かっくんです。
</Text>
<Text fontSize="lg" lineHeight="tall">
大手外資系商社でエンジニアとして働いています。フロントエンド開発を中心に、業務システムの開発に従事しています。
Web開発は比較的最近から始めたものの、日々の業務を通じてスキルアップに励んでいます。
</Text>
<Text fontSize="lg" lineHeight="tall" mt={8}>
このページでは、私が開発したプロジェクトや得意とするスキルについて紹介しています。
ぜひご覧いただければ幸いです。
</Text>
</Box>
</Box>
</Flex>
);
};

export default About;