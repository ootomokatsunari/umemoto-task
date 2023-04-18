import { SetStateAction, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import styles from "../styles/styles.module.css";
import { log } from "console";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [address, setAddress] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=1560041`
      );

      setAddress(
        response.data.results[0].address1 +
          response.data.results[0].address2 +
          response.data.results[0].address3
      );
    } catch (error) {
      setAddress("エラーが発生しました。もう一度やり直してください。");
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box bg="gray.50" className={styles.container}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py={4}
        px={8}
        bg="white"
        boxShadow="md"
      >
        <Box>
          <Heading as="h1" size="lg" letterSpacing="-0.1rem" color="teal.500">
            Ootomo開発本部
          </Heading>
        </Box>
        <Stack as="ul" direction="row" spacing={4} align="center">
          <Box as="li" listStyleType="none">
            <a href="#about" className={styles.navLink}>
              <Text fontSize="lg" fontWeight="bold" color="gray.500">
                About
              </Text>
            </a>
          </Box>
          <Box as="li" listStyleType="none">
            <a href="#projects" className={styles.navLink}>
              <Text fontSize="lg" fontWeight="bold" color="gray.500">
                Projects
              </Text>
            </a>
          </Box>
          <Box as="li" listStyleType="none">
            <a href="#contact" className={styles.navLink}>
              <Text fontSize="lg" fontWeight="bold" color="gray.500">
                Contact
              </Text>
            </a>
          </Box>
        </Stack>
      </Flex>
      <Flex>
        <Box
          as="section"
          id="about"
          className={styles.aboutSection}
          px={8}
          py={16}
          flex={1}
          pr={12}
        >
          <Flex alignItems="center">
            <Box maxW="sm" mx="auto">
              <Image
                src="/images/profile2.jpg"
                alt="プロフィール画像"
                width={200}
                height={200}
                objectFit="cover"
                borderRadius="full"
                mb={8}
                className={styles.profileImage}
              />
            </Box>
            <Box mx={8}>
              <Heading as="h1" size="xl" mb={2} className={styles.heading}>
                KatsunariOotomo
              </Heading>
              <Text fontSize="lg" className={styles.profileBio}>
                大手外資系商社で働くエンジニア。フロントエンド開発を中心に、業務システムの開発に従事している。
              </Text>
              <Text fontSize="lg" className={styles.profileBio}>
                React, Next.js,
                TypeScriptを得意とし、最近はUI/UXの改善にも力を入れている。
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box as="aside" w={72} px={4} py={16} bg="white" boxShadow="md">
          <Heading as="h2" size="md" mb={4} color="teal.500">
            プロフィール
          </Heading>
          <Text fontSize="md" className={styles.sidebarBio}>
            大手外資系商社で働くエンジニア。フロントエンド開発を中心に、業務システムの開発に従事しています。
          </Text>
          <Text fontSize="md" className={styles.sidebarBio}>
            React, Next.js,
            TypeScriptを得意としており、最近はUI/UXの改善にも力を入れています。
          </Text>
          <Box mt={8}>
            <FormControl>
              <FormLabel>郵便番号</FormLabel>
            </FormControl>
            {address && (
              <FormControl mt={4}>
                <FormLabel>住所</FormLabel>
                <Text>{address}</Text>
              </FormControl>
            )}
          </Box>
        </Box>
      </Flex>
      <Box
        as="section"
        id="projects"
        className={styles.projectsSection}
        px={8}
        py={16}
        bg="gray.50"
      >
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="teal.500">
          Projects
        </Heading>
        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={12}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Image
              src="/images/project1.png"
              alt="Project1"
              maxW="100%"
              h="auto"
              mb={4}
              borderRadius="lg"
              boxShadow="md"
            />
            <Heading as="h3" size="lg" mb={2} color="teal.500">
              Business System
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              As a web developer at a major foreign trading company, I developed
              and improved internal business systems using React and TypeScript
              on the frontend, and Node.js on the backend. I created a system
              that covers a wide range of business processes, including
              attendance and time management, expense applications, and report
              creation.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/project2.png"
              alt="Project2"
              maxW="100%"
              h="auto"
              mb={4}
              borderRadius="lg"
              boxShadow="md"
            />
            <Heading as="h3" size="lg" mb={2} color="teal.500">
              E-commerce Site
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              I built an e-commerce site using React and Next.js, and
              implemented various features such as product search and filtering,
              shopping cart, and payment processing with Stripe. I also focused
              on improving the site's performance and user experience by
              optimizing images, lazy loading, and implementing responsive
              design.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/project3.png"
              alt="Project3"
              maxW="100%"
              h="auto"
              mb={4}
              borderRadius="lg"
              boxShadow="md"
            />
            <Heading as="h3" size="lg" mb={2} color="teal.500">
              Travel Blog
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              I created a travel blog using Gatsby, Contentful, and Netlify. The
              site is optimized for SEO and features a responsive design, as
              well as a dynamic page for each blog post. I also implemented a
              commenting system using Disqus and a subscription system using
              Mailchimp.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/project4.png"
              alt="Project4"
              maxW="100%"
              h="auto"
              mb={4}
              borderRadius="lg"
              boxShadow="md"
            />
            <Heading as="h3" size="lg" mb={2} color="teal.500">
              Social Network
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              As a personal project, I built a social network using MERN stack
              (MongoDB, Express, React, Node.js) and Socket.io. The site
              features user authentication, real-time messaging, and a news feed
              that displays posts from friends. I also implemented various
              security measures, such as password hashing and JWT
              authentication.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        as="section"
        id="contact"
        className={styles.contactSection}
        px={8}
        py={16}
      >
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="teal.500">
          Contact
        </Heading>
        <Flex justifyContent="center" alignItems="center">
          <Box w="lg">
            <FormControl id="name" isRequired mb={4}>
              <FormLabel>お名前</FormLabel>
              <Input placeholder="お名前" />
            </FormControl>
            <FormControl id="email" isRequired mb={4}>
              <FormLabel>メールアドレス</FormLabel>
              <Input type="email" placeholder="メールアドレス" />
            </FormControl>
            <FormControl id="message" isRequired mb={8}>
              <FormLabel>メッセージ</FormLabel>

              <Textarea placeholder="メッセージ" />
            </FormControl>
            <Button colorScheme="teal" size="lg" width="100%" mb={8}>
              お問い合わせ
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
