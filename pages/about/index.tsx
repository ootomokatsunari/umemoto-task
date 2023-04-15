import { Box, Flex, Heading, Text, Image, IconButton, Link } from "@chakra-ui/react";
import { FaBars, FaPhone } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const About = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      {/* サイトバー */}
      <Box pos="fixed" top={0} left={0} w={16} h="100%" bg="gray.900">
        <Flex h="100%" direction="column" justify="space-between" align="center" py={8}>
          <Box>
            <IconButton
              icon={<FaBars color="white" />}
              aria-label="Menu"
              bg="transparent"
              fontSize="2xl"
              _hover={{ bg: "transparent" }}
            />
            <Image src="./images/logo.png" alt="Logo" w={10} h={10} mt={8} />
          </Box>
          <Box>
            <Link href={`tel:${'08063809879'}`}>
              <IconButton
                icon={<FaPhone color="white" />}
                aria-label="Phone"
                bg="transparent"
                fontSize="2xl"
                _hover={{ bg: "transparent" }}
                mr={2}
              />
            </Link>
            <Link href={`https://www.instagram.com/${'kakkun.style'}`}>
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
        <Box maxW="md" borderWidth="1px" borderRadius="xl" overflow="hidden" boxShadow="xl" bg="white">
          <Box bg="teal.500" h={24} display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold" color="white">About me</Text>
          </Box>
          <Box p={8}>
            <Heading as="h1" size="3xl" mb={8} color="teal.500" textAlign="center" fontFamily="Georgia, serif">Katsunari Ootomo</Heading>
            <Text fontSize="xl" fontWeight="bold" mb={8} color="gray.500" textAlign="center">Web Developer</Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.600">
              Hello, my name is Katsunari Ootomo. I'm a web developer working for a major foreign trading company.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.600" mt={8}>
              I specialize in front-end development using React and TypeScript, and have experience building various types of web applications, including business systems and e-commerce sites. I'm also interested in UI/UX design and constantly striving to improve my skills in this area.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.600" mt={8}>
              If you have any questions or inquiries, please don't hesitate to contact me. You can reach me at the phone number listed below or via email using the contact form on this website.
            </Text>
          </Box>
          </Box>
      </Flex>
      {/* フッター */}
      <Box bg="gray.900" py={4}>
        <Flex justify="space-between" align="center" px={8} color="white">
          <Text>© 2023 Katsunari Ootomo</Text>
          <Box>
            <Link href={`https://www.instagram.com/${'kakkun.style'}`}>
              <IconButton
                icon={<FiInstagram />}
                aria-label="Instagram"
                bg="transparent"
                fontSize="2xl"
                _hover={{ bg: "transparent" }}
                mr={2}
              />
            </Link>
            <Link href={`tel:${'08063809879'}`}>
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
