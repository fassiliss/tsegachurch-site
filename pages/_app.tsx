import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/mfp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/style.css";


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
