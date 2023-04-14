import { ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <nav>
        <Link href="/"> Home</Link>
      </nav>
      <Component {...pageProps} />
      <Link href="/about">About</Link>
    </ChakraProvider>
  );
}

export default MyApp;
