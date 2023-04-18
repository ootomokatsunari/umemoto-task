import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  Link,
  Stack,
  Input,
} from "@chakra-ui/react";
import { FaBars, FaPhone } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { GetServerSideProps } from "next";

type Zipcode = {
  main: string;
  sub: string;
};
type Address = {
  address1: string;
  address2: string;
  address3: string;
};

type SidebarProps = {
  phoneNumber: string;
  instagramId: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

const Sidebar = () => {
  const [zipcode, setZipcode] = useState<Zipcode>({
    main: "",
    sub: "",
  });
  const [address, setAddress] = useState<Address>({
    address1: "",
    address2: "",
    address3: "",
  });

  const updateZipcodeMain = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode({ ...zipcode, main: e.target.value });
  };
  const updateZipcodeSub = async (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode({ ...zipcode, sub: e.target.value });
    if (e.target.value.length === 4 && zipcode.main.length === 3) {
      try {
        const res = await axios.get(
          "https://zipcloud.ibsnet.co.jp/api/search",
          {
            params: {
              zipcode: zipcode.main + e.target.value,
            },
          }
        );
        if (res.data.results) {
          const result = res.data.results[0];
          setAddress({
            ...address,
            address1: result["address1"],
            address2: result["address2"],
            address3: result["address3"],
          });
        }
      } catch {
        alert("住所の取得に失敗しました。");
      }
    }
  };

  return (
    <Box pos="fixed" top={0} left={0} w={16} h="100%" bg="gray.900" zIndex={10}>
      <Flex
        h="100%"
        direction="column"
        justify="space-between"
        align="center"
        py={8}
      >
        <Box>
          <Link href="/">
            <IconButton
              icon={<FaBars color="white" />}
              aria-label="Menu"
              bg="transparent"
              fontSize="2xl"
              _hover={{ bg: "transparent" }}
              mb={8}
            />
          </Link>
          <Image src="./images/logo.png" alt="Logo" w={10} h={10} mt={8} />
        </Box>
        <Box>
          <Box maxW="md" mx="auto">
            <Stack direction="row" my={4}>
              <Input
                type="text"
                onChange={updateZipcodeMain}
                value={zipcode.main}
                placeholder="郵便番号(3桁)"
                w="25%"
              />
              <Text fontSize="3xl" fontWeight="bold" color="gray.400">
                -
              </Text>
              <Input
                type="text"
                onChange={updateZipcodeSub}
                value={zipcode.sub}
                placeholder="郵便番号(4桁)"
                w="50%"
              />
            </Stack>
            <Box mt={8}>
              <Heading as="h3" size="md" mb={2}>
                自動入力される住所
              </Heading>
              <Box>
                <Text fontSize="md" fontWeight="bold" mb={2}>
                  都道府県: {address.address1}
                </Text>
                <Text fontSize="md" fontWeight="bold" mb={2}>
                  市区町村: {address.address2}
                </Text>
                <Text fontSize="md" fontWeight="bold" mb={2}>
                  町域: {address.address3}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
};

const About = ({ posts }: Props) => {
  return (
    <Box bg="gray.50" minH="100vh">
      {/* サイトバー */}
      <Box
        pos="fixed"
        top={0}
        left={0}
        w={16}
        h="100%"
        bg="gray.900"
        zIndex={10}
      >
        <Flex
          h="100%"
          direction="column"
          justify="space-between"
          align="center"
          py={8}
        >
          <Box>
            <Link href="/">
              <IconButton
                icon={<FaBars color="white" />}
                aria-label="Menu"
                bg="transparent"
                fontSize="2xl"
                _hover={{ bg: "transparent" }}
                mb={8}
              />
            </Link>
            <Image src="./images/logo.png" alt="Logo" w={10} h={10} mt={8} />
          </Box>
          <Box>
            <Link href={`tel:${"08063809879"}`}>
              <IconButton
                icon={<FaPhone color="white" />}
                aria-label="Phone"
                bg="transparent"
                fontSize="2xl"
                _hover={{ bg: "transparent" }}
                mr={2}
              />
            </Link>
            <Link href={`https://www.instagram.com/${"kakkun.style"}`}>
              <IconButton
                icon={<FiInstagram color="white" />}
                aria-label="Instagram"
                bg="transparent"
                fontSize="2xl"
                _hover={{ bg: "transparent" }}
                ml={2}
              />
            </Link>
          </Box>
        </Flex>
      </Box>
      {/* 自己紹介 */}
      <Flex justify="center" alignItems="center" pt={20} pb={10}>
        <Box
          maxW="md"
          borderWidth="1px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="xl"
          bg="white"
        >
          <Box
            bg="teal.500"
            h={24}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="white">
              About me
            </Text>
          </Box>
          <Box p={8}>
            <Heading
              as="h1"
              size="3xl"
              mb={8}
              color="teal.500"
              textAlign="center"
              fontFamily="Georgia, serif"
            >
              Katsunari Ootomo
            </Heading>
            <Text
              fontSize="xl"
              fontWeight="bold"
              mb={8}
              color="gray.500"
              textAlign="center"
            >
              Web Developer
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.600">
              Hello, my name is Katsunari Ootomo. I'm a web developer working
              for a major foreign trading company.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.600" mt={8}>
              I specialize in front-end development using React and TypeScript,
              and have experience building various types of web applications,
              including business systems and e-commerce sites. I'm also
              interested in UI/UX design and constantly striving to improve my
              skills in this area.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.600" mt={8}>
              If you have any questions or inquiries, please don't hesitate to
              contact me. You can reach me at the phone number listed below or
              via email using the contact form on this website.
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* フッター */}
      <Box bg="gray.900" py={4}>
        <Flex justify="space-between" align="center" px={8} color="white">
          <Text>© 2023 Katsunari Ootomo</Text>
          <Box>
            <Link href={`https://www.instagram.com/${"kakkun.style"}`}>
              <IconButton
                icon={<FiInstagram />}
                aria-label="Instagram"
                bg="transparent"
                fontSize="2xl"
                _hover={{ bg: "transparent" }}
                mr={2}
              />
            </Link>
            <Link href={`tel:${"08063809879"}`}>
              <Text fontSize="xl" fontWeight="bold">
                <FaPhone color="white" mr={2} />
                080-6380-9879
              </Text>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default About;
