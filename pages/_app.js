// import '@styles/globals.css'
import "@styles/tailwind.css";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="aa-purple.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
