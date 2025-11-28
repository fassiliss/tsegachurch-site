import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/custom.css";
import "../styles/mfp.css";
import "swiper/css";

type AppPropsWithSession = AppProps & {
  pageProps: {
    session?: any;
  };
};

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithSession) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
