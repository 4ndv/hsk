import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import NextNprogress from 'nextjs-progressbar'

import '~/styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HSK</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <NextNprogress
        color="#29D"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
