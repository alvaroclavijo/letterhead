import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import * as ga from '../lib/google-analytics'

function MyApp({ Component, pageProps }) {

  const router =useRouter();

  useEffect(() => {
    const handlerRouteChange = (url) => {
      ga.pageView(url)
    }

    router.events.on('routeChangeComplete', handlerRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handlerRouteChange)
    }
  },[router.events])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_TRACKING_ID}`} strategy='afterInteractive' />
      <Script id='google-analytics-script' strategy='afterInteractive' >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${ga.GA_TRACKING_ID}');
        `}

      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
