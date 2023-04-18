import { ChakraProvider } from "@chakra-ui/react"
import { Global, css } from "@emotion/react"
import Sidebar from "../components/Sidebar";

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
            "Hiragino Sans", Meiryo, sans-serif;
        }
      `}
    />
    {children}
  </>
)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
