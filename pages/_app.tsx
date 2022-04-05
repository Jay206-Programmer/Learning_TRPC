import '../styles/globals.css'
import { withTRPC } from "@trpc/next";
import { AppRouter } from "./api/trpc/[trpc]";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function getBaseUrl() {
  if (process.browser) return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
    };
  },
  ssr: true,
})(MyApp);

// export default MyApp
