import 'antd/dist/antd.css';
import 'styles/style.css';
import Header from 'components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      {router.pathname !== '/' && <Header />}
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
