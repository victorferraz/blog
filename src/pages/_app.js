import App from 'next/app';
import React from 'react';
import  GlobalStyles  from '../ui/global';
import Layout  from '../components/Layout/';


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}
