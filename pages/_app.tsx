import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from "next/link";

function App() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <h1>Hello World!</h1>
    </>
  );
}

export default App;
