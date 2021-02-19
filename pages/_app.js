import "normalize.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import "animate.css"
import "./../src/css/global.css"

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} test="123" />
}

export default MyApp