import { Box, Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import styles from "../styles/styles.module.css";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <Box className={styles.container}>
      <Flex as="nav" align="center" justify="space-between" py={4} px={8}>
        <Box>
          <Heading as="h1" size="lg" letterSpacing="-0.1rem">
            かっくんのポートフォリオ
          </Heading>
        </Box>
        <Stack as="ul" direction="row" spacing={4} align="center">
          <Box as="li" listStyleType="none">
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </Box>
          <Box as="li" listStyleType="none">
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </Box>
          <Box as="li" listStyleType="none">
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </Box>
        </Stack>
      </Flex>
      <Box as="section" id="about" className={styles.aboutSection} px={8} py={16}>
        <Heading as="h1" size="xl" mb={4} className={styles.heading}>
          かっくんのポートフォリオ
        </Heading>
        <Text fontSize="lg" mb={8} className={styles.intro}>
          はじめまして、私はかっくんです。このポートフォリオでは、私のプロジェクトやスキルを紹介します。
        </Text>
        <Box maxW="sm" mx="auto">
          <Image
            src="/profile.jpg"
            alt="プロフィール画像"
            width={200}
            height={200}
            borderRadius="full"
            mb={8}
            className={styles.profileImage}
          />
        </Box>
        <Text fontSize="lg" mb={8} className={styles.profileBio}>
          私はフロントエンド開発に興味を持っており、ReactやNext.jsなどのフレームワークを使用してWebアプリケーションを開発しています。
        </Text>
      </Box>
      <Box as="section" id="projects" className={styles.projectsSection} px={8} py={16}>
        <Heading as="h2" size="lg" mb={8} className={styles.subheading}>
          プロジェクト
        </Heading>
        <Stack spacing={8}>
          <Box>
            <Heading as="h3" size="md" mb={4} className={styles.projectTitle}>
              プロジェクト1
            </Heading>
            <Text fontSize="lg" className={styles.projectDescription}>
              これはプロジェクト1の説明です。
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4} className={styles.projectTitle}>
              プロジェクト2
            </Heading>
            <Text fontSize="lg"
className={styles.projectDescription}>
これはプロジェクト2の説明です。
</Text>
</Box>
</Stack>
</Box>
<Box as="section" id="contact" className={styles.contactSection} px={8} py={16}>
<Heading as="h2" size="lg" mb={8} className={styles.subheading}>
お問い合わせ
</Heading>
<Text fontSize="lg" mb={8} className={styles.contactDescription}>
ご質問やご要望があれば、お気軽にお問い合わせください。
</Text>
<Stack as="form" spacing={4} direction="column">
<Box>
<Input type="text" id="name" name="name" placeholder="お名前" required />
</Box>
<Box>
<Input type="email" id="email" name="email" placeholder="メールアドレス" required />
</Box>
<Box>
<Input as="textarea" id="message" name="message" placeholder="お問い合わせ内容" required />
</Box>
<Box>
<Input type="submit" value="送信" className={styles.submitButton} />
</Box>
</Stack>
</Box>
<Box as="footer" className={styles.footer} px={8} py={4}>
<Text fontSize="lg">
© {new Date().getFullYear()} かっくん. All rights reserved.
</Text>
</Box>
</Box>
);
}

export default Home;



