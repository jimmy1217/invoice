import "normalize.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import "./../src/css/global.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Head>
                <title>Invoice</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v10.0&appId=135408438457379" nonce="HlDwQEUp"></script>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp