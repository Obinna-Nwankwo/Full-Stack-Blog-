import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Aos from '@/components/Aos';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Aos>
        <Component {...pageProps} />
      </Aos>
    </main>
  );
}
