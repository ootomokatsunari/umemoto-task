import { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <Link href="/"> Home</Link>
      </nav>
      <Component {...pageProps} />
      <Link href="/about">About</Link>
    </div>
  );
}
export default MyApp;
