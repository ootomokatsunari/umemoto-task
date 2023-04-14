import { Box, Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import styles from "../styles/styles.module.css";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <Box className={styles.container}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py={4}
        px={8}
        bg="gray.100"
      >
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
      <Box
        as="section"
        id="about"
        className={styles.aboutSection}
        px={8}
        py={16}
      >
        <Flex alignItems="center">
          <Box maxW="sm" mx="auto">
            <Image
              src="/images/profile2.jpg"
              alt="プロフィール画像"
              width={200}
              height={200}
              borderRadius="full"
              mb={8}
              className={styles.profileImage}
            />
          </Box>
          <Box mx={8}>
            <Heading as="h1" size="xl" mb={2} className={styles.heading}>
              かっくん
            </Heading>
            <Text fontSize="xl" className={styles.profileBio}>
              大手外資系商社で働くエンジニア。フロントエンド開発を中心に、業務システムの開発に従事している。
            </Text>
            <Text fontSize="xl" className={styles.profileBio}>
              React, Next.js, TypeScriptを得意とし、最近はUI/UXの改善にも力を入れている。
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        as="section"
        id="projects"
        className={styles.projectsSection}
        px={8}
        py={16}
      >
        <Heading as="h2" size="xl" mb={8} className={styles.subheading}>
          プロジェクト
        </Heading>
        <Stack spacing={8}>
          <Box>
            <Heading as="h3" size="lg" mb={2} className={styles.projectTitle}>
              社内向け業務システムの開発
            </Heading>
            <Text fontSize="lg" className={styles.projectDescription}>
              社員の効率的な業務遂行のため、社内システムの改修・新規開発を行いました。
              フロントエンド開発にはReactとTypeScript、バックエンドにはNode.jsを使用しました。
        従業員の出勤・勤怠管理、経費申請、業務報告書作成など、幅広い業務プロセスをカバーするシステムを構築しました。
      </Text>
      <Box>
        <Heading as="h3" size="lg" mb={2} className={styles.projectTitle}>
          オンラインショップの開発
        </Heading>
        <Text fontSize="lg" className={styles.projectDescription}>
          ユーザーが商品を閲覧・購入できるオンラインショップを開発しました。
          フロントエンド開発にはReact、バックエンド開発にはNode.jsとExpressを使用し、
          決済処理にはStripe APIを導入しました。
          商品検索やカート機能、注文履歴の確認など、一般的なECサイトに必要な機能を実装しました。
        </Text>
        </Box>
      </Box>
    </Stack>
  </Box>

  <Box
    as="section"
    id="contact"
    className={styles.contactSection}
    px={8}
    py={16}
  >
    <Heading as="h2" size="xl" mb={8} className={styles.subheading}>
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



